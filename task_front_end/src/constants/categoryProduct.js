
    export const category= [	{
      "title": "Tạp hóa",
      "href": "/type/tap-hoa",
      "subCategories":[
        {
          "title": "Đồ ăn sáng",
          "href": "/type/do-an-sang",
        },
        {
          "title": "Đồ khô",
          "href": "/type/do-kho",
        },
        {
          "title": "Đồ uống",
          "href": "/type/do-uong",
        },
        {
          "title": "Rượu bia",
          "href": "/type/ruou-bia",
        },
        {
          "title": "Chăm sóc nhà cửa",
          "href": "/type/cham-soc-nha-cua",
        },
        {
          "title": "Kẹo và Socola",
          "href": "/type/keo-nha-cua",
        },
      ]
    },
      {
        "title": "QUẢN LÝ CHUNG",
        "href": "",
        "header": true,
        "resources": [
          "student",
          "parent"
        ],
        "requiredPermissions": [
          "student:view"
        ]
      },
  
      {
        "title": "Nội dung",
        "href": "/admin/article",
        "resources": [
          "student",
          "parent"
        ],
        "iconClass": "fa-regular fa-file-lines",
        "requiredPermissions": [
          "student:view"
        ],
        "subMenus": [
          {
            "title": "Bài viết",
            "href": "/admin/article-post",
            "resources": [
              "article-post",
              "article-post/add",
              "article-post/detail",
              "article-post/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "student:view"
            ]
          },
          {
            "title": "Danh sách bài viết",
            "href": "/admin/article-list",
            "resources": [
              "article-list",
              "article-list/add",
              "article-list/detail",
              "article-list/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "student:view"
            ]
          },
          {
            "title": "Bài viết nổi bật",
            "href": "/admin/article-featured",
            "resources": [
              "article-featured",
              "article-featured/add",
              "article-featured/detail",
              "article-featured/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "student:view"
            ]
          }
        ]
      },
  
      {
        "title": "Quản lý shop",
        "href": "/admin/shop",
        "resources": [
          "class"
        ],
        "iconClass": "fa-solid fa-cart-shopping",
        "requiredPermissions": [
          "class:view"
        ],
        "subMenus": [
          {
            "title": "Tổng quan",
            "href": "/admin/shop-overview",
            "resources": [
              "shop-overview",
              "shop-overview/add",
              "shop-overview/detail",
              "shop-overview/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "class:view"
            ]
          },
          {
            "title": "Sản phẩm",
            "href": "/admin/shop-product",
            "resources": [
              "shop-product",
              "shop-product/add",
              "shop-product/detail",
              "shop-product/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "classdairy:view"
            ]
          },
          {
            "title": "Đơn hàng",
            "href": "/admin/shop-order",
            "resources": [
              "shop-order",
              "shop-order/add",
              "shop-order/detail",
              "shop-order/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "classdairy:view"
            ]
          },
          {
            "title": "Khách hàng",
            "href": "/admin/shop-passenger",
            "resources": [
              "shop-passenger",
              "shop-passenger/add",
              "shop-passenger/detail",
              "shop-passenger/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "classdairy:view"
            ]
          },
          {
            "title": "Khuyến mãi",
            "href": "/admin/shop-discount",
            "resources": [
              "shop-discount",
              "shop-discount/add",
              "shop-discount/detail",
              "shop-discount/edit"
            ],
            "iconClass": "fa-regular fa-circle",
            "requiredPermissions": [
              "classdairy:view"
            ]
          }
        ]
      },
      {
        "title": "Điểm danh",
        "href": "/admin/muster",
        "resources": [
          "muster"
        ],
        "iconClass": "users",
        "requiredPermissions": [
          "muster:view"
        ],
        "subMenus": [
          {
            "title": "Điểm danh hôm nay",
            "href": "/admin/muster",
            "resources": [
              "muster"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "muster:view"
            ]
          },
          {
            "title": "Lịch sử điểm danh",
            "href": "/admin/muster-history",
            "resources": [
              "muster-history"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "muster:view"
            ]
          },
          {
            "title": "Tổng hợp điểm danh",
            "href": "/admin/muster-all",
            "resources": [
              "muster-all",
              "muster-all/detail",
              "muster-all/list-date"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "muster:view"
            ]
          },
          {
            "title": "Danh sách ăn tối hôm nay",
            "href": "/admin/muster-dinner",
            "resources": [
              "muster-dinner"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "muster:view"
            ]
          }
        ]
      },
      {
        "title": "Chấm công",
        "href": "/admin/time-keeping",
        "resources": [
          "time-keeping"
        ],
        "iconClass": "users",
        "requiredPermissions": [
          "time-keeping:view"
        ],
        "subMenus": [
          {
            "title": "Chấm công hôm nay",
            "href": "/admin/time-keeping",
            "resources": [
              "time-keeping"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "time-keeping:view"
            ]
          },
          {
            "title": "Lịch sử chấm công",
            "href": "/admin/time-keeping/history",
            "resources": [
              "time-keeping/history"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "time-keeping:view"
            ]
          },
          {
            "title": "Tổng hợp chấm công",
            "href": "/admin/time-keeping/all",
            "resources": [
              "time-keeping/all",
              "time-keeping/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "time-keeping:view"
            ]
          }
        ]
      },
      {
        "title": "Chương trình học",
        "href": "",
        "resources": [
          "teachingplan",
          "timetable",
          "activity",
          "lesson",
          "main-topic",
          "monthly-plan",
          "annualgoal",
          "chuongtrinhhoc"
        ],
        "iconClass": "calendar",
        "requiredPermissions": [
          "timetable:view"
        ],
        "subMenus": [
          {
            "title": "Tổng quan",
            "href": "/admin/chuongtrinhhoc",
            "resources": [
              "timetable",
              "timetable/add",
              "timetable/detail",
              "timetable/schedule",
              "monthly-plan",
              "monthly-plan/add",
              "monthly-plan/detail",
              "annual-plan",
              "annual-plan/detail",
              "annualgoal",
              "annualgoal/detail",
              "chuongtrinhhoc"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "timetable:view"
            ]
          },
          {
            "title": "Giáo án",
            "href": "/admin/teachingplan",
            "resources": [
              "teachingplan",
              "teachingplan/add",
              "teachingplan/detail",
              "teachingplan/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "timetable:view"
            ]
          },
          {
            "title": "Tên hoạt động",
            "href": "/admin/activity",
            "resources": [
              "activity",
              "activity/add",
              "activity/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "timetable:view"
            ]
          },
          {
            "title": "Lịch sinh hoạt",
            "href": "/admin/lesson",
            "resources": [
              "lesson",
              "lesson/add",
              "lesson/edit",
              "lesson/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "timetable:view"
            ]
          },
          {
            "title": "Chủ đề lớn",
            "href": "/admin/main-topic",
            "resources": [
              "main-topic"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "timetable:view"
            ]
          }
        ]
      },
      {
        "title": "Thực đơn",
        "href": "",
        "resources": [
          "menu"
        ],
        "iconClass": "list",
        "requiredPermissions": [
          "menu:view"
        ],
        "subMenus": [
          {
            "title": "Thực đơn hằng tuần",
            "href": "/admin/menu",
            "resources": [
              "menu",
              "menu/add",
              "menu/detail",
              "menu/view"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "menu:view"
            ]
          },
          {
            "title": "Món ăn",
            "href": "/admin/dish",
            "resources": [
              "dish",
              "dish/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "menu:view"
            ]
          },
          {
            "title": "Bữa ăn",
            "href": "/admin/meal",
            "resources": [
              "meal"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "menu:view"
            ]
          }
        ]
      },{
        "title": "Nhân sự",
        "href": "",
        "resources": [
          "teacher",
          "employee"
        ],
        "iconClass": "users",
        "requiredPermissions": [
          "employee:view"
        ],
        "subMenus": [
          {
            "title": "Giáo viên",
            "href": "/admin/teacher",
            "resources": [
              "teacher",
              "teacher/add",
              "teacher/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "employee:view"
            ]
          },
          {
            "title": "Nhân viên",
            "href": "/admin/employee",
            "resources": [
              "employee",
              "employee/add",
              "employee/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "employee:view"
            ]
          }
        ]
      },
      {
        "title": "Học phí",
        "href": "",
        "resources": [
          "tution"
        ],
        "iconClass": "book-open",
        "requiredPermissions": [
          "tution:view"
        ],
        "subMenus": [
          {
            "title": "Danh sách học phí",
            "href": "/admin/hocphi",
            "resources": [
              "hocphi",
              "hocphi/edit",
              "hocphi/detail",
              "hocphi/edit-all",
              "hocphi/pay-tuition"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "tution:view"
            ]
          },
          {
            "title": "DS giảm học phí",
            "href": "/admin/danh-sach-giam-hoc-phi",
            "resources": [
              "danh-sach-giam-hoc-phi",
              "danh-sach-giam-hoc-phi/edit",
              "danh-sach-giam-hoc-phi/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "tution:view"
            ]
          },
          {
            "title": "Quyết định",
            "href": "/admin/tution-monthly",
            "resources": [
              "tution-monthly",
              "tution-monthly/add",
              "tution-monthly/edit",
              "tution-monthly/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "tution:view"
            ]
          }
        ]
      },
      {
        "title": "Quản lý đánh giá",
        "href": "",
        "resources": [
          "daily-evaluation"
        ],
        "iconClass": "list",
        "requiredPermissions": [
          "daily-evaluation:view"
        ],
        "subMenus": [
          {
            "title": "Checklist công việc hằng ngày",
            "href": "/admin/daily-evaluation",
            "resources": [
              "daily-evaluation"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "daily-evaluation:view"
            ]
          }
        ]
      },
      {
        "title": "TUYỂN SINH",
        "href": "",
        "header": true,
        "resources": [
          "student",
          "parent"
        ],
        "requiredPermissions": [
          "candidate:view"
        ]
      },
      {
        "title": "DS nộp hồ sơ",
        "href": "/admin/candidate",
        "resources": [
          "candidate",
          "candidate/add",
          "candidate/detail"
        ],
        "iconClass": "users",
        "requiredPermissions": [
          "candidate:view"
        ]
      },
      {
        "title": "PH Tiềm năng",
        "href": "/admin/parent-potential",
        "resources": [
          "parent-potential",
          "parent-potential/add",
          "parent-potential/detail",
          "parent-potential/edit"
        ],
        "iconClass": "users",
        "requiredPermissions": [
          "sale:view"
        ]
      },
      {
        "title": "DS tham quan trường",
        "href": "/admin/visit",
        "resources": [
          "visit",
          "visit/add",
          "visit/detail",
          "visit/edit"
        ],
        "iconClass": "users",
        "requiredPermissions": [
          "appointment:view"
        ]
      },
      {
        "title": "THƯ VIỆN",
        "href": "",
        "header": true,
        "resources": [],
        "requiredPermissions": [
          "library:view"
        ]
      },
      {
        "title": "Bài giảng",
        "href": "/admin/lessonplan",
        "resources": [
          "lessonplan",
          "lessonplan/add",
          "lessonplan/detail",
          "lessonplan/edit"
        ],
        "iconClass": "folder",
        "requiredPermissions": [
          "library:view"
        ]
      },
      {
        "title": "Video",
        "href": "/admin/video",
        "resources": [
          "video",
          "video/add",
          "video/detail",
          "video/edit",
          "video/listvideo",
          "video/view"
        ],
        "iconClass": "folder",
        "requiredPermissions": [
          "library:view"
        ]
      },
      {
        "title": "Hình ảnh",
        "href": "/admin/album",
        "resources": [
          "album",
          "album/add",
          "album/detail",
          "album/edit",
          "album/view"
        ],
        "iconClass": "folder",
        "requiredPermissions": [
          "library:view"
        ]
      },
      {
        "title": "Files",
        "href": "/admin/files",
        "resources": [
          "files",
          "files/add",
          "files/detail"
        ],
        "iconClass": "folder",
        "requiredPermissions": [
          "file:view"
        ]
      },
      {
        "title": "QUẢN LÝ WEBSITE",
        "href": "",
        "header": true,
        "resources": [],
        "requiredPermissions": [
          "webcontent:view"
        ]
      },
      {
        "title": "Website",
        "href": "",
        "resources": [
          "post",
          "topic",
          "featured-post"
        ],
        "iconClass": "users",
        "requiredPermissions": [
          "webcontent:view"
        ],
        "subMenus": [
          {
            "title": "Bài viết",
            "href": "/admin/post",
            "resources": [
              "post",
              "post/add",
              "post/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "webcontent:view"
            ]
          },
          {
            "title": "Chủ đề",
            "href": "/admin/topic",
            "resources": [
              "topic",
              "topic/add",
              "topic/detail",
              "topic/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "webcontent:view"
            ]
          },
          {
            "title": "Bài viết nổi bật",
            "href": "/admin/post?filter=noibat",
            "resources": [
              "featured-post"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "webcontent:view"
            ]
          }
        ]
      },
      {
        "title": "Cấu hình",
        "href": "/admin/websetting",
        "resources": [
          "websetting"
        ],
        "iconClass": "settings",
        "requiredPermissions": [
          "webcontent:view"
        ],
        "subMenus": [
          {
            "title": "Cấu hình chung",
            "href": "/admin/websetting/general",
            "resources": [
              "websetting/general"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "webcontent:view"
            ]
          },
          {
            "title": "Trang chủ",
            "href": "/admin/websetting/homepage",
            "resources": [
              "websetting/homepage"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "webcontent:view"
            ]
          },
          {
            "title": "Tin tức",
            "href": "/admin/websetting/news",
            "resources": [
              "websetting/news"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "webcontent:view"
            ]
          },
          {
            "title": "Tuyển sinh",
            "href": "/admin/websetting/tuyensinh",
            "resources": [
              "websetting/tuyensinh"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "webcontent:view"
            ]
          }
        ]
      },
      {
        "title": "Chi phí",
        "href": "",
        "header": true,
        "resources": [],
        "requiredPermissions": [
          "daily-spend:view"
        ]
      },
      {
        "title": "Chi tiêu hằng ngày",
        "href": "/admin/daily-spend",
        "resources": [
          "daily-spend",
          "daily-spend/add",
          "daily-spend/detail",
          "daily-spend/edit"
        ],
        "iconClass": "folder",
        "requiredPermissions": [
          "daily-spend:view"
        ]
      },
      {
        "title": "Loại chi tiêu",
        "href": "/admin/daily-spend-type",
        "resources": [
          "daily-spend-type",
          "daily-spend-type/add",
          "daily-spend-type/detail",
          "daily-spend-type/edit"
        ],
        "iconClass": "folder",
        "requiredPermissions": [
          "daily-spend:view"
        ]
      },
      {
        "title": "Công việc",
        "href": "",
        "header": true,
        "resources": [],
        "requiredPermissions": [
          "workflow-management:view"
        ]
      },
      {
        "title": "Quản lý công việc",
        "href": "/admin/workflow-management",
        "resources": [
          "workflow-management",
          "workflow-management/add",
          "workflow-management/detail",
          "workflow-management/edit"
        ],
        "iconClass": "folder",
        "requiredPermissions": [
          "workflow-management:view"
        ]
      },
      {
        "title": "HỆ THỐNG",
        "href": "",
        "header": true,
        "resources": [],
        "requiredPermissions": [
          "system:view",
          "system-category:view"
        ]
      },
      {
        "title": "Danh mục",
        "href": "/admin/category",
        "resources": [
          "video-type",
          "title",
          "department",
          "grade",
          "relationship",
          "meal",
          "dish",
          "activity",
          "lesson"
        ],
        "iconClass": "menu",
        "requiredPermissions": [
          "system-category:view"
        ],
        "subMenus": [
          {
            "title": "Loại video",
            "href": "/admin/video-type",
            "resources": [
              "video-type",
              "video-type/add",
              "video-type/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view",
              "library:view"
            ]
          },
          {
            "title": "Năm học",
            "href": "/admin/school-year",
            "resources": [
              "school-year",
              "school-year/add",
              "school-year/detail",
              "school-year/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view"
            ]
          },
          {
            "title": "Nhóm lớp",
            "href": "/admin/group",
            "resources": [
              "group",
              "group/add",
              "group/detail",
              "group/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view"
            ]
          },
          {
            "title": "Khối lớp",
            "href": "/admin/grade",
            "resources": [
              "grade",
              "grade/add",
              "grade/detail",
              "grade/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view"
            ]
          },
          {
            "title": "Trình độ chuyên môn",
            "href": "/admin/qualification",
            "resources": [
              "qualification",
              "qualification/add",
              "qualification/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view",
              "employee:view"
            ]
          },
          {
            "title": "Mối quan hệ",
            "href": "/admin/relationship",
            "resources": [
              "relationship",
              "relationship/add",
              "relationship/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view"
            ]
          },
          {
            "title": "Trình độ văn hóa",
            "href": "/admin/educational-level",
            "resources": [
              "educational-level",
              "educational-level/add",
              "educational-level/detail",
              "educational-level/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view",
              "employee:view"
            ]
          },
          {
            "title": "Chủ đề bài giảng",
            "href": "/admin/lecturetopic",
            "resources": [
              "lecturetopic",
              "lecturetopic/add",
              "lecturetopic/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view",
              "library:view"
            ]
          },
          {
            "title": "Công việc",
            "href": "/admin/task",
            "resources": [
              "task",
              "task/add",
              "task/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view",
              "daily-evaluation:view"
            ]
          },
          {
            "title": "Loại học phí",
            "href": "/admin/tution-type",
            "resources": [
              "tution-type",
              "tution-type/add"
  
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "tution:view"
            ]
          },
          {
            "title": "Loại giảm",
            "href": "/admin/discount",
            "resources": [
              "discount",
              "discount/add",
              "discount/edit",
              "discount/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "tution:view"
            ]
          },
          {
            "title": "Ngày lễ",
            "href": "/admin/calendar",
            "resources": [
              "calendar",
              "calendar/add",
              "calendar/edit",
              "calendar/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view"
            ]
          }
        ]
      },
      {
        "title": "Hệ thống",
        "href": "",
        "resources": [
          "user",
          "role"
        ],
        "iconClass": "book-open",
        "requiredPermissions": [
          "system:view"
        ],
        "subMenus": [
          {
            "title": "Người dùng",
            "href": "/admin/user",
            "resources": [
              "user",
              "user/add",
              "user/edit"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view"
            ]
          },
          {
            "title": "Vai trò",
            "href": "/admin/role",
            "resources": [
              "role",
              "role/add",
              "role/edit",
              "role/detail"
            ],
            "iconClass": "circle",
            "requiredPermissions": [
              "system:view"
            ]
          }
        ]
      },
      {
        "title": "Trợ giúp",
        "href": "/admin/support",
        "resources": [
          "support"
        ],
        "iconClass": "help-circle",
        "requiredPermissions": [
          "system:view"
        ]
      }
    ]
