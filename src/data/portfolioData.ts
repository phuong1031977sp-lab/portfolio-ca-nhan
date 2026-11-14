export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  major: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  chapter: string;
  category: "Công nghệ số" | "Trí tuệ nhân tạo (AI)" | "Sư phạm Âm nhạc" | "Hợp tác số";
  summary: string;
  description: string;
  tags: string[];
  period: string;
  role: string;
  metrics?: string;
  deliverables?: string[];
  documentUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}

export const portfolioData = {
  personal: {
    fullName: "TRẦN NGỌC PHƯỢNG",
    brandName: "PHƯỢNG",
    title: "Sinh viên Sư phạm Âm nhạc | Trường ĐH Sư phạm Nghệ thuật Trung ương",
    tagline: "Kết nối Nghệ thuật Âm nhạc với Công nghệ số và Trí tuệ Nhân tạo",
    studentId: "2552210410",
    studentClass: "K20H – SPAN (Lớp tín chỉ: 24)",
    major: "Sư phạm Âm nhạc",
    courseModule: "Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo",
    institution: "Trường Đại học Sư phạm Nghệ thuật Trung ương",
    hometown: "Lào Cai",
    location: "Hà Nội & Lào Cai, Việt Nam",
    avatarUrl: "/images/profile.jpg",
    avatarFallbackUrl: "/images/avatar.jpg",
    bio: [
      "Xin chào! Mình là Trần Ngọc Phượng, sinh viên ngành Sư phạm Âm nhạc tại Trường Đại học Sư phạm Nghệ thuật Trung ương (Mã số sinh viên: 2552210410, Lớp: K20H – SPAN, Lớp tín chỉ: 24).",
      "Mình mang niềm đam mê sâu sắc với nghệ thuật âm nhạc, đặc biệt là ca hát, chơi đàn và tìm tòi các phương pháp học tập, sáng tạo âm nhạc hiện đại.",
      "Bên cạnh việc học chuyên ngành thanh nhạc và nhạc cụ, mình đặc biệt quan tâm đến công nghệ số và trí tuệ nhân tạo (AI), với mong muốn ứng dụng những công cụ này vào học tập, sáng tạo và giảng dạy âm nhạc trong tương lai."
    ],
    learningGoals: [
      "Nâng cao kiến thức và kỹ năng sử dụng công nghệ số toàn diện.",
      "Biết khai thác, đánh giá và quản lý thông tin trên Internet một cách khoa học.",
      "Sử dụng AI hiệu quả và có trách nhiệm để hỗ trợ học tập và sáng tạo nội dung.",
      "Ứng dụng công nghệ vào quá trình học tập và giảng dạy âm nhạc."
    ],
    portfolioGoals: [
      "Portfolio này được xây dựng nhằm giới thiệu bản thân, lưu trữ các sản phẩm học tập của học phần Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo, đồng thời thể hiện quá trình rèn luyện kỹ năng số của mình.",
      "Thông qua Portfolio, mình mong muốn tạo ra một không gian học tập cá nhân khoa học, dễ truy cập và thuận tiện chia sẻ các sản phẩm học tập với giảng viên, bạn bè."
    ],
    profileTraits: [
      { label: "Mã số sinh viên", value: "2552210410" },
      { label: "Lớp chuyên ngành", value: "K20H – SPAN" },
      { label: "Lớp tín chỉ", value: "24" },
      { label: "Quê quán", value: "Lào Cai" },
      { label: "Sở thích & Đam mê", value: "Chơi đàn, Hát" }
    ],
    interests: [
      "Hát & Kỹ thuật thanh nhạc",
      "Chơi đàn Piano / Organ",
      "Ứng dụng AI sáng tạo âm nhạc",
      "Phương pháp sư phạm âm nhạc",
      "Thiết kế hoạt động dạy học số",
      "Khai thác thông tin học thuật"
    ]
  },

  education: [
    {
      id: "edu-1",
      degree: "Cử nhân Sư phạm Âm nhạc (Hệ chính quy)",
      institution: "Trường Đại học Sư phạm Nghệ thuật Trung ương",
      location: "Hà Nội, Việt Nam",
      period: "2024 – Hiện tại",
      major: "Sư phạm Âm nhạc (Lớp K20H – SPAN, Lớp tín chỉ: 24)",
      highlights: [
        "Mã số sinh viên: 2552210410",
        "Học phần trọng điểm: Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo",
        "Đào tạo toàn diện về kỹ năng thanh nhạc, nhạc cụ, lý thuyết âm nhạc cơ bản và phương pháp giảng dạy âm nhạc",
        "Tích cực nghiên cứu ứng dụng công cụ AI (ChatGPT, mô hình âm nhạc số) trong thiết kế hoạt động sư phạm"
      ]
    },
    {
      id: "edu-2",
      degree: "Tốt nghiệp Trung học Phổ thông",
      institution: "Trường THPT tại Lào Cai",
      location: "Lào Cai, Việt Nam",
      period: "Trước 2024",
      major: "Giáo dục Phổ thông & Rèn luyện Năng khiếu Âm nhạc",
      highlights: [
        "Tích cực tham gia các phong trào văn hóa, văn nghệ, biểu diễn âm nhạc học đường",
        "Nuôi dưỡng đam mê nghệ thuật và định hướng thi tuyển vào Trường Đại học Sư phạm Nghệ thuật Trung ương"
      ]
    }
  ] as EducationItem[],

  skillCategories: [
    {
      category: "Chuyên môn Âm nhạc & Sư phạm",
      iconName: "Music",
      skills: [
        { name: "Hát & Kỹ thuật Thanh nhạc", level: 92, note: "Sở thích và năng khiếu chuyên ngành" },
        { name: "Chơi đàn & Nhạc cụ", level: 88, note: "Thực hành đệm đàn và diễn tấu" },
        { name: "Lý thuyết Âm nhạc & Ký xướng âm", level: 85, note: "Nền tảng chuyên môn vững vàng" },
        { name: "Thiết kế hoạt động dạy học âm nhạc", level: 86, note: "Dạy học cao độ, đường nét giai điệu" }
      ]
    },
    {
      category: "Kỹ năng Công nghệ số & AI",
      iconName: "Sparkles",
      skills: [
        { name: "Kỹ thuật viết Prompt AI (ChatGPT)", level: 90, note: "Bài tập 03: Prompt cơ bản, cải tiến, nâng cao" },
        { name: "Tìm kiếm & Đánh giá tài liệu học thuật", level: 88, note: "Bài tập 02: Toán tử nâng cao, DOI, Google Scholar" },
        { name: "Quản lý tệp tin & Thư mục khoa học", level: 92, note: "Bài tập 01: Quy tắc đặt tên và quản lý tệp tin" },
        { name: "Ứng dụng AI tạo sinh sáng tạo nội dung", level: 85, note: "Bài tập 05: Sản phẩm số hỗ trợ dạy học" }
      ]
    },
    {
      category: "Hợp tác & Liêm chính Học thuật",
      iconName: "ShieldCheck",
      skills: [
        { name: "Liêm chính học thuật & Đạo đức AI", level: 95, note: "Bài tập 06: Sử dụng AI có trách nhiệm" },
        { name: "Công cụ hợp tác trực tuyến cho dự án nhóm", level: 88, note: "Bài tập 04: Giao tiếp & quản lý công việc số" },
        { name: "Tự học & Thích ứng công nghệ mới", level: 90, note: "Chủ động nâng cao kỹ năng số cá nhân" },
        { name: "Giao tiếp & Tương tác sư phạm", level: 87, note: "Tương tác học đường tự tin, thân thiện" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "proj-1",
      title: "Bài tập 1. Thao tác cơ bản với tệp tin và thư mục",
      chapter: "Chương 1: Máy tính và các thiết bị ngoại vi",
      category: "Công nghệ số",
      period: "Học kỳ 1",
      role: "Sinh viên thực hiện",
      summary: "Xây dựng cấu trúc thư mục khoa học, thiết lập quy tắc đặt tên và quản lý tệp tin.",
      description: "Thực hành thiết kế cây thư mục học tập logic theo môn học và học kỳ, áp dụng chuẩn quy tắc đặt tên rõ ràng, phân loại định dạng tệp tin, giúp tối ưu hóa khả năng tra cứu và quản lý dữ liệu số cá nhân.",
      tags: ["Quản lý tệp tin", "Cấu trúc thư mục", "Quy tắc đặt tên", "Chương 1"],
      metrics: "Chuẩn hóa cấu trúc lưu trữ học tập",
      deliverables: [
        "Sơ đồ cây thư mục học tập môn Công nghệ số và chuyên ngành Sư phạm Âm nhạc",
        "Bộ quy tắc đặt tên tệp tin khoa học phục vụ lưu trữ lâu dài",
       "Quy trình sao lưu dữ liệu cá nhân an toàn trên máy tính và đám mây"
],
documentUrl: "/documents/bai-1.pdf",
downloadUrl: "/documents/bai-1.docx",
},
{
      id: "proj-2",
      title: "Bài tập 2. Tìm kiếm và đánh giá thông tin học thuật",
      chapter: "Chương 2: Khai thác dữ liệu và thông tin",
      category: "Trí tuệ nhân tạo (AI)",
      period: "Học kỳ 1",
      role: "Tác giả báo cáo",
      summary: "Ứng dụng trí tuệ nhân tạo trong sáng tác và sản xuất âm nhạc hiện nay: cơ hội, thách thức và vấn đề bản quyền.",
      description: "Thực hành tìm kiếm thông tin bằng toán tử nâng cao và đánh giá độ tin cậy của 11 nguồn tài liệu học thuật quốc tế (ScienceDirect, Springer, Oxford Academic, SAGE, arXiv, SSRN, Google Scholar). Phân tích công nghệ tạo nhạc AI, tác động kinh tế âm nhạc và quyền tác giả trong môi trường số.",
      tags: ["AI trong Âm nhạc", "Đánh giá học thuật", "Google Scholar", "Bản quyền số", "Chương 2"],
      metrics: "Sàng lọc & đánh giá 11 tài liệu học thuật quốc tế",
      deliverables: [
        "Báo cáo thực hành chi tiết với ma trận sàng lọc 6 tiêu chí học thuật",
        "Phân tích chuyên sâu về công nghệ tạo nhạc bằng AI và quyền tác giả âm nhạc",
        "Minh chứng tra cứu DOI và trang lưu trữ gốc từ các nhà xuất bản uy tín"
      ],
documentUrl: "/documents/bai-2.pdf",
downloadUrl: "/documents/bai-2.docx",
    },
    {
      id: "proj-3",
      title: "Bài tập 3. Viết Prompt hiệu quả cho các tác vụ học tập",
      chapter: "Chương 3: Tổng quan về trí tuệ nhân tạo",
      category: "Sư phạm Âm nhạc",
      period: "Học kỳ 1",
      role: "Người thiết kế thử nghiệm",
      summary: "Thử nghiệm và đánh giá hiệu quả các mức Prompt trong thiết kế hoạt động dạy học cao độ và giai điệu Âm nhạc lớp 6.",
      description: "So sánh Prompt ban đầu với Prompt cải tiến và đánh giá kết quả do AI tạo ra. Khảo sát ảnh hưởng của mức độ chi tiết trong câu lệnh đến chất lượng phản hồi của ChatGPT, thiết kế hoạt động dạy học trực quan và câu hỏi âm nhạc cho học sinh THCS.",
      tags: ["Kỹ thuật Prompt", "ChatGPT", "Dạy học Âm nhạc", "Cao độ & Giai điệu", "Chương 3"],
      metrics: "Thử nghiệm 3 cấp độ Prompt với chuẩn sư phạm",
      deliverables: [
        "Bảng so sánh đối chiếu kết quả giữa Prompt ngắn và Prompt có bối cảnh sư phạm",
        "Kế hoạch hoạt động dạy học cao độ và đường nét giai điệu ứng dụng AI",
        "Bộ nguyên tắc viết câu lệnh chuẩn cho sinh viên sư phạm nghệ thuật"
      ],
documentUrl: "/documents/bai-3.pdf",
downloadUrl: "/documents/bai-3.docx",
    },
    {
      id: "proj-4",
      title: "Bài tập 4. Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      chapter: "Chương 4: Giao tiếp và hợp tác trong môi trường số",
      category: "Hợp tác số",
      period: "Học kỳ 1",
      role: "Thành viên nhóm dự án",
      summary: "Trình bày cách sử dụng công cụ trực tuyến để phối hợp và quản lý công việc nhóm.",
      description: "Ứng dụng các công cụ trực tuyến hiện đại (Google Workspace, nền tảng trao đổi và lưu trữ số) để phân công nhiệm vụ, đồng chỉnh sửa tài liệu và theo dõi tiến độ công việc nhóm học tập một cách khoa học.",
      tags: ["Làm việc nhóm", "Hợp tác trực tuyến", "Google Workspace", "Giao tiếp số", "Chương 4"],
      metrics: "Tối ưu hóa quy trình phối hợp nhóm học tập",
      deliverables: [
        "Kế hoạch phân công nhiệm vụ và biên bản làm việc nhóm trực tuyến",
        "Tài liệu đồng chỉnh sửa và quản lý sản phẩm học tập chung",
        "Quy trình trao đổi thông tin và phản hồi hiệu quả giữa các thành viên"
      ],
documentUrl: "/documents/bai-4.pdf",
downloadUrl: "/documents/bai-4.docx",    },
    {
      id: "proj-5",
      title: "Bài tập 5. Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      chapter: "Chương 5: Sáng tạo nội dung số",
      category: "Trí tuệ nhân tạo (AI)",
      period: "Học kỳ 1",
      role: "Người sáng tạo nội dung số",
      summary: "Giới thiệu một sản phẩm số được thực hiện với sự hỗ trợ của AI.",
      description: "Khai thác sức mạnh của trí tuệ nhân tạo tạo sinh nhằm hỗ trợ sáng tạo ý tưởng giai điệu, phối khí thử nghiệm, thiết kế hình ảnh và giáo cụ trực quan minh họa cho bài giảng âm nhạc sinh động.",
      tags: ["AI Tạo sinh", "Sáng tạo nội dung", "Âm nhạc số", "Giáo cụ trực quan", "Chương 5"],
      metrics: "Tích hợp AI tạo sinh vào sản phẩm học tập âm nhạc",
      deliverables: [
        "Sản phẩm số âm nhạc minh họa kết hợp công nghệ AI",
        "Bộ tư liệu hình ảnh trực quan hỗ trợ bài học âm nhạc",
        "Báo cáo quy trình sáng tạo và tinh chỉnh sản phẩm từ đầu ra AI"
      ],
documentUrl: "/documents/bai-5.pdf",
downloadUrl: "/documents/bai-5.docx",
videoUrl: "https://www.youtube.com/watch?v=hnwLU9AYHKw",
    },
    {
      id: "proj-6",
      title: "Bài tập 6. Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      chapter: "Chương 6: An toàn và liêm chính học thuật trong môi trường số",
      category: "Công nghệ số",
      period: "Học kỳ 1",
      role: "Nghiên cứu viên",
      summary: "Xây dựng các nguyên tắc sử dụng AI có trách nhiệm, trung thực và an toàn.",
      description: "Xây dựng bộ quy tắc ứng xử chuẩn mực dành cho sinh viên khi ứng dụng AI trong học tập: tôn trọng liêm chính học thuật, minh bạch trong trích dẫn, kiểm chứng nguồn tin gốc, bảo vệ quyền tác giả và an toàn thông tin cá nhân.",
      tags: ["Liêm chính học thuật", "Đạo đức AI", "An toàn số", "Trách nhiệm học tập", "Chương 6"],
      metrics: "Xây dựng bộ nguyên tắc sử dụng AI học đường",
      deliverables: [
        "Bản quy ước 5 nguyên tắc vàng khi sử dụng AI trong học tập",
        "Hướng dẫn ghi nhận minh chứng và trích dẫn nội dung AI hỗ trợ",
        "Cam kết liêm chính học thuật trong toàn bộ học phần và nghiên cứu"
      ],
documentUrl: "/documents/bai-6.pdf",
downloadUrl: "/documents/bai-6.docx",    }
  ] as ProjectItem[],

  achievements: [
    {
      id: "ach-1",
      title: "Báo cáo thực hành xuất sắc Bài tập 02",
      organization: "Học phần Công nghệ số & AI",
      year: "2024",
      description: "Nghiên cứu ứng dụng AI trong sáng tác, sản xuất âm nhạc và vấn đề bản quyền tác giả với 11 nguồn học thuật quốc tế.",
      badge: "Đánh giá xuất sắc"
    },
    {
      id: "ach-2",
      title: "Thử nghiệm sư phạm thành công Bài tập 03",
      organization: "Trường ĐH Sư phạm Nghệ thuật TW",
      year: "2024",
      description: "Thiết kế thành công bộ Prompt 3 cấp độ hỗ trợ dạy học cao độ và giai điệu cho học sinh lớp 6.",
      badge: "Sáng tạo Sư phạm"
    },
    {
      id: "ach-3",
      title: "Xây dựng Portfolio số cá nhân hiện đại",
      organization: "Khoa Sư phạm Âm nhạc",
      year: "2024",
      description: "Hệ thống hóa toàn bộ hành trình rèn luyện kỹ năng số, sản phẩm học phần và định hướng sư phạm tương lai.",
      badge: "Kỹ năng số"
    },
    {
      id: "ach-4",
      title: "Sinh viên ngành Sư phạm Âm nhạc",
      organization: "Trường ĐH Sư phạm Nghệ thuật TW",
      year: "2024 – Nay",
      description: "Chăm chỉ học tập, rèn luyện kỹ năng thanh nhạc, nhạc cụ và tích cực ứng dụng công nghệ giáo dục hiện đại.",
      badge: "K20H – SPAN"
    }
  ] as AchievementItem[]
};
