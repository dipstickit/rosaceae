import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { getListBank } from "../../api/payosApi";
import io from "socket.io-client";
import Dialog from "@mui/material/Dialog";
import { CircularProgress } from "react-cssfx-loading";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import { toast } from "react-toastify";
import { toJpeg } from "html-to-image";

interface Bank {
  bin: string;
  logo: string;
  name: string;
}

interface BankPaymentProps {
  qrCode: string;
  accountName: string;
  accountNumber: string;
  bin: string;
  amount: string;
  orderCode: string;
  description: string;
}

interface BankPaymentComponentProps {
  props: BankPaymentProps;
}

const BankPayment: React.FC<BankPaymentComponentProps> = ({ props }) => {
  const [openQR, setOpenQR] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [bank, setBank] = useState<Bank | null>(null);
  const socket = io(process.env.REACT_APP_ORDER_URL as string);

  const navigate = useNavigate();

  const handleCopyText = (textToCopy: string) => {
    toast.success("Sao chép thành công");
    navigator.clipboard.writeText(textToCopy);
  };

  const downloadQRCode = async () => {
    const node = document.getElementById("my-node");

    if (node) {
      toJpeg(node, { quality: 0.95 })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `${props.accountNumber}_${props.bin}_${props.amount}_${props.orderCode}_Qrcode.png`;
          link.href = dataUrl;
          link.click();
          link.remove();
        })
        .catch((error) => {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  useEffect(() => {
    if (!props?.bin) return;

    (async () => {
      try {
        const res = await getListBank();
        const bank = res.data.filter((bank: Bank) => bank.bin === props.bin);
        setBank(bank[0]);
      } catch (err) {
        console.log(err);
      }
    })();

    socket.on("paymentUpdated", (data: any) => {
      if (data.orderId === props.orderCode) {
        setIsCheckout(true);
        socket.emit("leaveOrderRoom", props.orderCode);

        setTimeout(() => {
          navigate("/result", {
            state: {
              orderCode: props.orderCode,
            },
          });
        }, 3000);
      }
    });

    socket.emit("joinOrderRoom", props.orderCode);

    return () => {
      socket.emit("leaveOrderRoom", props.orderCode);
    };
  }, [props.bin, props.orderCode, navigate]);

  return (
    <Box
      component="div"
      sx={{ flex: 3, borderWidth: 0.5, alignItems: "center" }}
      className="!border-gray-200 !border-solid rounded-2xl shadow p-5 !bg-gradient-to-r from-purple-300 to-blue-400 flex flex-col !w-full"
    >
      <Typography className="!text-xl !font-bold text-gray-700 pb-5">
        Thanh toán qua ngân hàng
      </Typography>
      <Box component="div" className="flex lg:flex-row w-full gap-10 md:flex-col sm:flex-row flex-col">
        <Box component="div" className="flex flex-row self-center w-8/12 xl:w-4/12 2xl:w-3/12">
          <Button className="w-full h-full" onClick={() => setOpenQR(true)}>
            <QRCode
              value={props.qrCode}
              level="M"
              includeMargin={true}
              renderAs="svg"
              fgColor="#25174E"
              bgColor="transparent"
              style={{ borderRadius: 10, width: "100%", height: "100%" }}
              className="!bg-gradient-to-br from-green-200 via-purple-200 to-green-200"
            />
          </Button>
        </Box>
        <Box component="div" className="flex flex-col gap-5">
          <Box component="div" className="flex flex-row gap-2">
            {bank && <img src={bank.logo} width={100} height={55} alt={bank.name} />}
            <Box component="div" className="flex flex-col">
              <Typography className="text-gray-900 text-opacity-70 !text-sm">
                Ngân hàng
              </Typography>
              <Typography className="text-gray-800 !text-sm !font-bold">
                {bank?.name}
              </Typography>
            </Box>
          </Box>
          <Box component="div" className="flex flex-col gap-2">
            <Box component="div" className="flex flex-row">
              <Box component="div" className="flex flex-col">
                <Typography className="text-gray-900 text-opacity-70 !text-sm">
                  Chủ tài khoản:
                </Typography>
                <Typography className="text-gray-800 !text-sm !font-bold">
                  {props.accountName}
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="flex flex-row">
              <Box component="div" className="flex flex-col" sx={{ flex: 11 }}>
                <Typography className="text-gray-900 text-opacity-70 !text-sm">
                  Số tài khoản :
                </Typography>
                <Typography className="text-gray-800 !text-sm !font-bold">
                  {props.accountNumber}
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                className="h-7 !bg-purple-200 !object-right !ml-auto !my-auto"
                sx={{ flex: 2 }}
                onClick={() => handleCopyText(props.accountNumber)}
              >
                <Typography className="!text-xs !font-bold text-gray-600 normal-case">
                  Sao chép
                </Typography>
              </Button>
            </Box>
            <Box component="div" className="flex flex-row">
              <Box component="div" className="flex flex-col" sx={{ flex: 11 }}>
                <Typography className="text-gray-900 text-opacity-70 !text-sm">
                  Số tiền :
                </Typography>
                <Typography className="text-gray-800 !text-sm !font-bold">
                  {props.amount} vnd
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                className="h-7 !bg-purple-200 !object-right !ml-auto !my-auto"
                sx={{ flex: 2 }}
                onClick={() => handleCopyText(props.amount)}
              >
                <Typography className="!text-xs !font-bold text-gray-600 normal-case">
                  Sao chép
                </Typography>
              </Button>
            </Box>
            <Box component="div" className="flex flex-row">
              <Box component="div" className="flex flex-col" sx={{ flex: 11 }}>
                <Typography className="text-gray-900 text-opacity-70 !text-sm">
                  Nội dung :
                </Typography>
                <Typography className="text-gray-800 !text-sm !font-bold ">
                  {props.description}
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{ flex: 2 }}
                className="h-7 !bg-purple-200 !object-right !ml-auto !my-auto"
                onClick={() => handleCopyText(props.description)}
              >
                <Typography className="!text-xs !font-bold text-gray-600 normal-case">
                  Sao chép
                </Typography>
              </Button>
            </Box>
          </Box>

          <Typography className="!text-sm text-gray-700">
            Lưu ý : Nhập chính xác nội dung{" "}
            <span className="!font-bold">{props.description}</span> khi chuyển
            khoản
          </Typography>
          <Box component="div" className="flex flex-row gap-5 items-center">
            {!isCheckout ? (
              <>
                <CircularProgress color="gray" width="30px" height="30px" />
                <Typography className="!text-lg text-gray-700">
                  Đơn hàng đang chờ được thanh toán
                </Typography>
              </>
            ) : (
              <>
                <CheckIcon width={30} height={30} color="success" />
                <Typography className="!text-lg text-gray-700">
                  Đơn hàng đã được thanh toán thành công
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Typography className="!text-sm text-gray-700 p-5">
        Mở App Ngân hàng bất kỳ để quét mã VietQR hoặc chuyển khoản chính xác
        nội dung bên trên
      </Typography>
      {/* Dialog for QR Code */}
      <Dialog open={openQR} onClose={() => setOpenQR(false)}>
        <Box
          component="div"
          className="p-20 flex flex-col justify-center items-center gap-5"
        >
          <Typography className="text-center">
            Mở App Ngân hàng bất kỳ để quét mã VietQR
          </Typography>
          <QRCode
            id="my-node"
            value={props.qrCode}
            level="M"
            includeMargin={true}
            renderAs="svg"
            fgColor="#25174E"
            bgColor="transparent"
            style={{ borderRadius: 10, width: "100%", height: "100%" }}
            className="!bg-gradient-to-br from-green-200 via-purple-200 to-green-200"
          />
          <Box component="div" className="flex flex-row gap-10 pt-10">
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              color="inherit"
              onClick={downloadQRCode}
            >
              <Typography className="normal-case">Tải xuống</Typography>
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<ShareIcon />}
            >
              <Typography className="normal-case">Chia sẻ</Typography>
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default BankPayment;
