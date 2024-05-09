
export const textApp = {

    common: {
        button: {
            login: "Đăng nhập",
            reissue: "Đăng ký",
            createProduct: "Tạo sản phẩm"
        }
    },
    Login: {
        pageTitle: "Đăng nhập",
        label: {
            username: "Tài khoản",
            password: "Mật khẩu"
        },
        placeholder: {
            username: "Vui lòng nhập tên đăng nhập",
            password: "Vui lòng nhập mật khẩu"
        },
        message: {
            username: "Tên đăng nhập không được để trống",
            password: "Mật khẩu không được để trống",
            error: "Tài khoản hoặc mật khẩu sai",
            error1: "Đang có lỗi máy chủ vui lòng liên hệ quản lý.",
        }
    },
    Reissue: {
        pageTitle: "Tạo tài khoản",
        label: {
            username: "Tên đăng nhập",
            password: "Mật Khẩu",
            password2: "Xác nhận lại mật khẩu",
            phone: "Số điện thoại",
            email: "Email"
        },
        placeholder: {
            username: "Vui lòng nhập tên đăng nhập",
            phone: "Vui lòng nhập số điện thoại",
            email: "Vui lòng nhập địa chỉ email",
            password: "Vui lòng nhập mật khẩu",
            password2: "Vui lòng nhập mật khẩu",
        },
        message: {
            username: "Tên đăng nhập không được để trống",
            usernameMIn: "Tài khoản phải lớn hơn 6 kí tự",
            phone: "Số điện thoại không được để trống",
            password: "Mật khẩu không được để trống",
            password2: "Mật khẩu không được để trống",
            passwordMIn: "Mật khẩu phải lớn hơn hoặc bằng 5 kí tự",
            email: "Địa chỉ mail không được để trống",
            emailFormat: "Định dạng mail không hợp lệ.",
            passwordCheck: "Mật khẩu nhập lại không khớp.",
        }
    },
    CreateProduct: {
        pageTitle: "Tạo sản phẩm",
        label: {
            name: "Tên sản phẩm",
            price: "Giá tiền",
            quantity: "Số lượng sản phẩm",
            detail: "Chi tiết",
            models: "Mẫu mã",
            accessory: "Phụ kiền",
            sold: "Đã bán",
            image: 'Hình ảnh',
            description: "Chi tiết sản phẩm",
        },
        placeholder: {
            name: "Vui lòng nhập tên sản phẩm",
            price: "Vui lòng nhập giá tiền sản phẩm",
            quantity: "Vui lòng nhập số lượng sản phẩm",
            shape: "Vui lòng nhập hình dáng sản phẩm",
            detail: "Vui lòng nhập chi tiết sản phẩm",
            models: "Vui lòng nhập mẫu mã sản phẩm",
            genre: "Vui lòng nhập chất liệu sản phẩm",
            accessory: "Vui lòng nhập phụ kiền",
            sold: "Vui lòng nhập số lượng đã bán",
            image: "Vui lòng thêm hình ảnh",
            description: "Vui lòng nhập mô tả",
        },
        message: {
            name: "Tên sản phẩm không được để trống",
            price: "Giá sản phẩm không được để trống",
            priceMin: "phải lớn hơn hoặc bằng 1",
            shape: "Yêu cầu này là bắt buộc",
            priceDecimal: "Số tiền không được là số thập phân ",
            quantity: "Số lượng sản phẩm không được để trống",
            quantityMin: "phải lớn hơn hoặc bằng 1",
            detail: "Chi tiết sản phẩm không được để trống",
            models: "Mẫu mã sản phẩm không được để trống",
            genre: "Chất liệu sản phẩm không được để trống",
            accessory: "Phụ kiền không được để trống",
            sold: "Sản phẩm đã bán không được để trống",
            image: "Hình ảnh sản phẩm không được để trống",
            description: "Mô tả sản phẩm không được để trống",
        },
        Notification: {
            m1: {
                message: "Lỗi",
                description: "Giá tiền phải là số nguyên!"
            },
            m2: {
                message: "Thành công",
                description: "Tạo sản phẩm thành công!"
            },
            m3: {
                message: "Lỗi",
                description: "Tạo sản phẩm không thành công!"
            },
            m4: {
                message: "Lỗi",
                description: "Vui lòng chọn Chất liệu sản phẩm!"
            },
            m5: {
                message: "Lỗi",
                description: "Vui lòng chọn ít nhất một ảnh minh họa!"
            },
            m6: {
                message: "Lỗi",
                description: "Giá tiền giảm phải nhỏ hơn giá tiền gốc !"
            },
            m7: {
                message: "Lỗi",
                description: "Giá tiền gốc phải hợp lý!"
            },
            m8: {
                message: "Lỗi",
                description: "Giá tiền giảm phải hợp lý!"
            },
            m9: {
                message: "Thành công",
                description: "Tạo đơn hàng thành công!"
            },
        }
    },
    TableProduct: {
        title: {
            change: "Chỉnh sửa",
            delete: 'Xóa sản phẩm'
        },
        modal: {
            cancel: "Hủy",
            submitChange: "Thay đổi",
            submitDelete: "Xóa"
        },
        Notification: {
            delete: {
                message: "Thành công!",
                description: "Đã xóa sản phẩm!"
            },
            deleteError: {
                message: "Thất bại!",
                description: "Vui lòng kiểm tra lại hoặc báo cho kĩ thuật!"
            },
            change: {
                message: "Thành công!",
                description: "Chỉnh sửa sản phẩm thành công!"
            },
            update: {
                message: "Thành công!",
                description: "Chỉnh sửa sản phẩm thành công!"
            }, 
            updateFail: {
                message: "Thất bại!",
                description: "Chỉnh sửa sản phẩm thất bại!"
            }
        }
    },
    Product: {
        title: {

        },
        button: {
            add: 'Thêm vào giỏ hàng',
            pay: 'Thanh toán'

        },
        page: {
            quantity: "Số lượng",
            genre: "Tag: ",
            shape: "Hình Dáng :"
        },
        message: {
            quantity: "Số lượng không đúng.",
            min: "Số lượng phải lớn hơn hoặc bằng 1.",

        },
        Notification: {
            m1: {
                message: "Thành công!",
                description: "Đã thêm vào giỏ hàng!"
            },
            m2: {
                message: "Thành công!",
                description: "Cập nhật số lượng sản phẩm thành công"
            },
            m3: {
                message: "Thất bại!",
                description: "Đã có sản phẩm trong giỏ hàng"
            },
        }
    },
    Footer: {
        contact: {
            title: "Thông tin liên hệ",
            adress: "Địa chỉ: LôE2a Đường D1, Thành phố Thủ Đức",
            email: "Email: ĐangKhoa@gmail.com",
            phone: "Số điện thoại: (0123) 456-7890",
        },

        aboutUs: {
            title: "Thông tin",
            infor: "Về chúng tôi",
            info1: "Sản phẩm",
            info2: "Chính sách bảo mật",
            info3: "Điều khoản sử dụng"
        },
        ship: {
            title: "Thông tin vận chuyển",
            freeShip: "Miễn phí vận chuyển cho đơn hàng trên 1.000.000 VND",
            time: "Thời gian vận chuyển: 3-5 ngày làm việc"
        },
        send: {
            field: "Nhập địa chỉ email",
            submit: "Gửi"
        }
    },
    HeaderAdmin: {
        product: "Sản phẩm",
    },
    Header: {
        home: "Trang chủ",
        category:"Danh mục",
        allProduct:"Sản phẩm",
        required:"Đặt hàng theo yêu cầu",
        search: "Tìm kiếm...",
    },
    Home: {
        getAll: "Xem thêm...",
        text: "Sản phẩm mới"
    },
    Payment: {
        title: "Thanh toán",
        error:"Lỗi",
        message: "Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.",
        information: {
            title: "Thông tin khách hàng",
            label: {
                name: "Họ và tên",
                address: "Địa chỉ",
                phone: "Số điện thoại",
                email: "Email",
                promotion: "Mã khuyễn mãi",
                description: "Thông tin bổ sung"
            },
            placeholder: {
                name: "Vui lòng nhập họ và tên",
                address: "Vui lòng nhập địa chỉ",
                phone: "Vui lòng nhập số điện thoại",
                email: "Vui lòng nhập  Email",
                promotion: "Mã khuyễn mãi",
                description: "Vui lòng nhập thông tin bổ sung"

            },
            message: {
                name: "Trường này là bắt buộc",
                address: "Trường này là bắt buộc",
                phone: "Trường này là bắt buộc",
                email: "Trường này là bắt buộc",
                emailError: "Mail không hợp lệ",
            },
        },
        text: "Sản phẩm mới",
        payments:"Hình thức thanh toán: ",
        orderButton:"Đặt hàng",
        cash:"Tiền mặt",
        totalMoney:'Tổng thành tiền',
        quantity:'Tổng số lượng'
    },
    ShoppingCart: {
        tile: "Giỏ hàng",
        checkbox: "Chọn tất cả"
    },
    OrderHistory:{
        label:{
        status: "Chờ duyệt",
        status1:"Đang xử lí",
        status2:"Đang vận chuyển",
        status3:"Hoàn thành",
        status4:"Đã hủy",
        status5:"Trả hàng",
        status6:"Tất cả",
        status7:"Chờ đặt cọc",
    },
    value:{
        status: "pending",
        status1:"processing",
        status2:"transporting",
        status3:"done",
        status4:"cancel",
        status5:"return",
        status6:"all",
        status7:"deposit"
    },
    product:{
        quantity:"Số lượng: ",
        price:"Thành tiền: ",
        amount:"Tổng tiền"
    },
    title:"Danh sách đơn hàng",
    button:{
        contact:"Liên hệ người bán",
        reBuy: "Mua lại",
        cancel:"Hủy đơn hàng"
        
     }
    },
    Invoice:{
        title:"Xác Nhận Đơn Hàng",
        thankyou:"Cảm ơn quý khách đã sử dụng dịch vụ. Đơn hàng sẽ được chúng tôi chuẩn bị và giao đến trong thời gian sớm nhất. Chúng tôi hy vọng quý khách hài lòng với dịch vụ.",
        status:"Đơn hàng của bạn đã được đặt thành công.",
        info:"Thông tin đơn hàng:",
        button:"Quay lại Trang Chủ",
        paymentMethod:"Hình thức thanh toán: Thanh toán bằng tiền mặt",
        orderDate:"Ngày đặt hàng",
    },

}
