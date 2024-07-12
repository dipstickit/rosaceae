import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Email,
  Phone,
  Instagram,
  YouTube,
  Twitter,
  Pinterest,
  Facebook,
} from "@mui/icons-material";
import { Footer, Header } from "../../components";

const ContactAdmin = () => {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header />
      <Container maxWidth="lg" className="py-10">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className="p-6">
              <Typography variant="h5" className="mb-4">
                Đăng ký mở shop với Rosaceae
              </Typography>
              <Typography className="mb-4">
                Nếu bạn quan tâm đến việc mở shop và muốn hợp tác với Rosaceae,
                hãy liên hệ với chúng tôi ngay hôm nay để biết thêm chi tiết và
                bắt đầu hành trình kinh doanh của bạn. Chúng tôi sẵn sàng hỗ trợ
                bạn trong mọi bước đi, từ việc thiết lập shop đến các chiến lược
                kinh doanh hiệu quả!
              </Typography>
              <Box className="flex items-center mb-2">
                <Email color="primary" />
                <Typography className="ml-2">
                  rosaceae.makebeauty@gmail.com
                </Typography>
              </Box>
              <Box className="flex items-center mb-2">
                <Phone color="primary" />
                <Typography className="ml-2">(+84) 39 2272 536</Typography>
              </Box>
              <Typography className="mt-4">
                Hãy liên hệ ngay với chúng tôi để trở thành một phần của cộng
                đồng Rosaceae và nhận được sự hỗ trợ tốt nhất từ đội ngũ chuyên
                nghiệp của chúng tôi!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="p-6">
              <Typography variant="h5" className="mb-4">
                Bạn có câu hỏi nào không?
              </Typography>
              <Box className="flex flex-wrap items-center mb-4">
                <Typography variant="body1" color="textSecondary">
                  <strong>Giờ làm việc:</strong> Thứ 2 – Thứ 6: 08 AM to 06 PM,
                  Thứ 7 & CN: 09 AM to 05 PM
                </Typography>
              </Box>
              <Box className="w-[70%] flex justify-between gap-5 md:w-full">
                <IconButton
                  component={Link}
                  to="https://www.instagram.com/rosaceae_vn?fbclid=IwZXh0bgNhZW0CMTAAAR1fXBxl3_3JsvTi9VW9HG6edoCfcW_BiPn74MTAvh5VBUu4Eq6RZgHbLmo_aem_Y4J-lHgRW5_TbfEOl1mDPg"
                  color="primary"
                >
                  <Instagram />
                </IconButton>
                <IconButton component={Link} to="/youtube" color="primary">
                  <YouTube />
                </IconButton>
                <IconButton
                  component={Link}
                  to="https://www.facebook.com/rosaceaevn"
                  color="primary"
                >
                  <Facebook />
                </IconButton>
                <IconButton component={Link} to="/pinterest" color="primary">
                  <Pinterest />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactAdmin;
