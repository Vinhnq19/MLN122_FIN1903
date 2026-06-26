export const SCENARIOS = [
  {
    year: 1,
    title: "Năm 1: Vòng luẩn quẩn của 'Giá' & 'Cung'",
    image: "./src/assets/s1_1.png",
    situation: "Tình huống 1.1: Đêm hè mất điện. Miền Bắc trải qua đợt nắng nóng cực đoan. Nước hồ thủy điện cạn trơ đáy, nguồn cung thiếu hụt trầm trọng đe dọa sinh hoạt và các khu công nghiệp.",
    options: [
      { text: "A. Cắt điện luân phiên sinh hoạt, ưu tiên sản xuất.", feedback: "Bạn ưu tiên nhà máy để giữ cam kết FDI, khiến người dân chịu nóng bức tột độ. Làn sóng chỉ trích bùng nổ trên mạng xã hội.\n(Ngân sách +10%, Hài lòng -30%, An ninh +20%)", budget: 10, satisfaction: -30, stability: 20 },
      { text: "B. Mua điện khẩn cấp từ láng giềng với giá cắt cổ.", feedback: "Bạn chấp nhận thâm hụt nặng nề để đảm bảo sinh hoạt cho người dân thành thị. Điện vẫn sáng, nhưng công ty gánh khoản nợ khổng lồ.\n(Ngân sách -30%, Hài lòng +20%, An ninh +10%)", budget: -30, satisfaction: 20, stability: 10 }
    ]
  },
  {
    year: 1,
    title: "Năm 1: Vòng luẩn quẩn của 'Giá' & 'Cung'",
    image: "./src/assets/s1_2.png",
    situation: "Tình huống 1.2: Báo cáo tài chính cuối năm đỏ lửa. Sau khi gánh lỗ từ việc mua điện đắt bán rẻ, tập đoàn đang âm vốn chủ sở hữu nghiêm trọng.",
    options: [
      { text: "A. Tăng giá điện để bù lỗ theo cơ chế thị trường.", feedback: "Giá điện tăng vọt khiến lạm phát leo thang. Doanh nghiệp và người dân kêu trời, nhưng bảng cân đối kế toán của bạn đã đẹp hơn.\n(Ngân sách +30%, Hài lòng -40%, An ninh 0%)", budget: 30, satisfaction: -40, stability: 0 },
      { text: "B. Giữ nguyên giá, xin Chính phủ khoanh nợ.", feedback: "Bạn để Nhà nước dùng ngân sách cứu trợ, giữ ổn định kinh tế vĩ mô. Tuy nhiên, việc thiếu vốn khiến công tác bảo trì hệ thống bị đình trệ.\n(Ngân sách -10%, Hài lòng +10%, An ninh -10%)", budget: -10, satisfaction: 10, stability: -10 }
    ]
  },
  {
    year: 2,
    title: "Năm 2: Làn sóng 'Năng lượng tái tạo' & Nghịch lý hạ tầng",
    image: "./src/assets/s2_1.png",
    situation: "Tình huống 2.1: Quá tải lưới điện. Các nhà đầu tư tư nhân ồ ạt xây dựng điện mặt trời, làm quá tải đường dây 500 kV quốc gia.",
    options: [
      { text: "A. Ép tư nhân ngừng phát điện lên lưới (Curtailment).", feedback: "Bạn bảo vệ an toàn cho hệ thống điện quốc gia, nhưng khiến các nhà đầu tư tư nhân biểu tình vì đứng trước bờ vực phá sản.\n(Ngân sách 0%, Hài lòng -20%, An ninh +30%)", budget: 0, satisfaction: -20, stability: 30 },
      { text: "B. Vay vốn ồ ạt để nâng cấp đường dây truyền tải.", feedback: "Bạn dùng đòn bẩy tài chính cực lớn để mở rộng lưới điện ngay lập tức. Tư nhân hoan hô, nhưng gánh nặng trả nợ đè nặng lên tập đoàn.\n(Ngân sách -30%, Hài lòng +10%, An ninh +20%)", budget: -30, satisfaction: 10, stability: 20 }
    ]
  },
  {
    year: 2,
    title: "Năm 2: Làn sóng 'Năng lượng tái tạo' & Nghịch lý hạ tầng",
    image: "./src/assets/s2_2.png",
    situation: "Tình huống 2.2: Cơ chế Mua bán điện trực tiếp (DPPA). Các tập đoàn FDI lớn yêu cầu mua điện sạch trực tiếp từ tư nhân, không qua độc quyền EVN.",
    options: [
      { text: "A. Chấp thuận mở cửa thị trường.", feedback: "Bạn mất đi lượng khách hàng 'sộp' nhất để bù chéo giá điện, nhưng thành công thu hút dòng vốn FDI chất lượng cao.\n(Ngân sách -20%, Hài lòng +20%, An ninh 0%)", budget: -20, satisfaction: 20, stability: 0 },
      { text: "B. Từ chối, bắt buộc mua bán qua một mối.", feedback: "Bạn bảo vệ thế độc quyền để giữ nguồn thu trợ giá cho nông thôn. Các tập đoàn FDI thất vọng và đe dọa rút vốn.\n(Ngân sách +20%, Hài lòng -20%, An ninh 0%)", budget: 20, satisfaction: -20, stability: 0 }
    ]
  },
  {
    year: 3,
    title: "Năm 3: An ninh Nguồn nước & Thủy điện",
    image: "./src/assets/s3_1.png",
    situation: "Tình huống 3.1: Xung đột lợi ích Thủy điện - Nông nghiệp. Các hồ chứa phải xả nước cứu lúa hạ lưu đang chết khô, nhưng nếu xả sẽ không còn nước phát điện.",
    options: [
      { text: "A. Giữ nước phát điện để bảo đảm an ninh năng lượng.", feedback: "Hàng ngàn héc-ta nông nghiệp mất mùa trắng tay. Dân oán thán, nhưng lưới điện quốc gia không bị sụp đổ.\n(Ngân sách +10%, Hài lòng -40%, An ninh +20%)", budget: 10, satisfaction: -40, stability: 20 },
      { text: "B. Xả nước cứu nông dân, chạy nhiệt điện dầu.", feedback: "Nông dân mang ơn bạn. Nhưng bạn phải tốn núi tiền mua dầu giá cao để chạy các nhà máy nhiệt điện bù đắp sản lượng thiếu hụt.\n(Ngân sách -30%, Hài lòng +30%, An ninh -20%)", budget: -30, satisfaction: 30, stability: -20 }
    ]
  },
  {
    year: 3,
    title: "Năm 3: An ninh Nguồn nước & Thủy điện",
    image: "./src/assets/s3_2.png",
    situation: "Tình huống 3.2: Xã hội hóa cung cấp nước sạch. Nguồn ngân sách cạn kiệt, hạ tầng ống nước đô thị xuống cấp rò rỉ nghiêm trọng.",
    options: [
      { text: "A. Bán cổ phần mảng nước sạch cho tư nhân hóa.", feedback: "Mạng lưới nước đô thị được nâng cấp sạch sẽ, nhưng giá nước tăng gấp 3 lần khiến người dân sống dở chết dở.\n(Ngân sách +30%, Hài lòng -30%, An ninh +20%)", budget: 30, satisfaction: -30, stability: 20 },
      { text: "B. Nhà nước quản lý, cắt giảm chi phí bảo trì.", feedback: "Giá nước vẫn rẻ, nhưng tỷ lệ thất thoát cao kỷ lục và thi thoảng vỡ ống cấp nước làm gián đoạn sinh hoạt đô thị.\n(Ngân sách +10%, Hài lòng +10%, An ninh -30%)", budget: 10, satisfaction: 10, stability: -30 }
    ]
  },
  {
    year: 4,
    title: "Năm 4: Bài toán Chuyển đổi Xanh (Quy hoạch điện VIII)",
    image: "./src/assets/s4_1.png",
    situation: "Tình huống 4.1: Các dự án nhiệt điện than lớn đã rót hàng tỷ USD đang bị tổ chức quốc tế tẩy chay và cấm vận vốn.",
    options: [
      { text: "A. Hủy bỏ dự án để giữ cam kết Net Zero.", feedback: "Bạn vứt bỏ hàng tỷ USD vốn Nhà nước. Giới môi trường quốc tế tung hô bạn, nhưng nguy cơ thiếu điện nền đe dọa hệ thống.\n(Ngân sách -40%, Hài lòng +20%, An ninh -20%)", budget: -40, satisfaction: 20, stability: -20 },
      { text: "B. Cố đấm ăn xôi hoàn thành nhà máy than.", feedback: "Bạn phớt lờ quốc tế để đảm bảo có điện nền giá rẻ. Tuy nhiên, hàng xuất khẩu của quốc gia bị đánh thuế carbon trừng phạt.\n(Ngân sách +10%, Hài lòng -20%, An ninh +30%)", budget: 10, satisfaction: -20, stability: 30 }
    ]
  },
  {
    year: 4,
    title: "Năm 4: Bài toán Chuyển đổi Xanh (Quy hoạch điện VIII)",
    image: "./src/assets/crisis_factory.png",
    situation: "Tình huống 4.2: Cuộc đua điện khí LNG. Nhập khẩu khí hóa lỏng đắt gấp nhiều lần than trong nước.",
    options: [
      { text: "A. Nhập LNG giá cao, ép giá bán lẻ rẻ.", feedback: "Nhà nước gánh phần chênh lệch khủng khiếp để có 'điện sạch'. Môi trường trong lành nhưng ngân khố thủng đáy.\n(Ngân sách -40%, Hài lòng +20%, An ninh +20%)", budget: -40, satisfaction: 20, stability: 20 },
      { text: "B. Quay lại đốt than trong nước để tiết kiệm.", feedback: "Bạn chọn giải pháp rẻ tiền, nhưng đẩy các đô thị lớn vào tình trạng ô nhiễm không khí khói bụi triền miên.\n(Ngân sách +20%, Hài lòng -30%, An ninh +10%)", budget: 20, satisfaction: -30, stability: 10 }
    ]
  },
  {
    year: 5,
    title: "Năm 5: Tái cấu trúc cốt lõi",
    image: "./src/assets/crisis_solar.png",
    situation: "Tình huống 5.1: Tách Trung tâm Điều độ Hệ thống điện Quốc gia (A0) ra khỏi Tập đoàn để đảm bảo minh bạch thị trường.",
    options: [
      { text: "A. Đồng ý chuyển A0 về Bộ quản lý.", feedback: "Tư nhân yên tâm đầu tư vì tính minh bạch. Tuy nhiên việc chuyển giao khiến hệ thống bị lúng túng và chia cắt vận hành ngắn hạn.\n(Ngân sách 0%, Hài lòng +20%, An ninh -20%)", budget: 0, satisfaction: 20, stability: -20 },
      { text: "B. Duy trì độc quyền điều độ.", feedback: "Bạn tối đa hóa hiệu quả chỉ huy tập trung, giữ hệ thống ổn định. Đổi lại, các nhà đầu tư tư nhân nghi ngờ và quay lưng.\n(Ngân sách +10%, Hài lòng -20%, An ninh +20%)", budget: 10, satisfaction: -20, stability: 20 }
    ]
  },
  {
    year: 5,
    title: "Năm 5: Tái cấu trúc cốt lõi",
    image: "./src/assets/crisis_powerout.png",
    situation: "Tình huống 5.2: Các quỹ đầu tư quốc tế đưa ra lời đề nghị thâu tóm toàn bộ lưới truyền tải 500 kV giúp Nhà nước xóa sạch nợ nần.",
    options: [
      { text: "A. Bán toàn bộ lưới truyền tải cốt lõi.", feedback: "Đổi lấy nguồn tiền khổng lồ, bạn xóa sạch nợ nần. Nhưng bạn đã trao chìa khóa mạch máu an ninh quốc gia vào tay ngoại quốc.\n(Ngân sách +60%, Hài lòng 0%, An ninh -60%)", budget: 60, satisfaction: 0, stability: -60 },
      { text: "B. Kiên quyết giữ lưới điện quốc gia.", feedback: "Bạn kêu gọi toàn dân thắt lưng buộc bụng. Vượt qua khó khăn, dòng điện cốt lõi vẫn thuộc về chủ quyền đất nước.\n(Ngân sách -20%, Hài lòng +20%, An ninh +30%)", budget: -20, satisfaction: 20, stability: 30 }
    ]
  }
];

export const ENDINGS = {
  BUDGET_CRASH: { title: "Vỡ nợ quốc gia", type: "bad", desc: "Bạn quá hào phóng ban phát phúc lợi hoặc đầu tư sai lầm. Tập đoàn phá sản, lưới điện bị bán tháo cho chủ nợ quốc tế. Bạn đối mặt với điều trần trước Quốc hội." },
  TRUST_CRASH: { title: "Bạo loạn năng lượng", type: "bad", desc: "Bạn ép người dân chịu mức giá trên trời hoặc cắt điện quá phũ phàng. Biểu tình nổ ra, lạm phát phi mã đẩy nền kinh tế vào suy thoái. Bạn buộc phải từ chức." },
  SYSTEM_CRASH: { title: "Kỷ nguyên tăm tối", type: "bad", desc: "Hạ tầng quá tải và thiếu vốn bảo trì dẫn đến rã lưới điện toàn quốc (Blackout). Đất nước chìm trong bóng tối nhiều tuần, thiệt hại không thể đong đếm." },
  CAPITALIST: { title: "Tập đoàn máu lạnh", type: "mid", desc: "Chỉ số tài chính đẹp rực rỡ, tư nhân tung hô bạn. Tuy nhiên, bất bình đẳng xã hội tăng mạnh, vùng sâu vùng xa hoàn toàn bị bỏ rơi vì không có lợi nhuận." },
  POPULIST: { title: "Nhà dân túy ảo tưởng", type: "mid", desc: "Bạn là vị thánh trong mắt người dân vì điện rẻ, nhưng bạn để lại một di sản nợ công khổng lồ cho khóa sau, hệ thống rệu rã chờ ngày sụp đổ." },
  CONSERVATIVE: { title: "Pháo đài bảo thủ", type: "mid", desc: "Nỗi sợ mất an ninh khiến bạn cự tuyệt đổi mới. Mạng lưới vững như bàn thạch nhưng vận hành quá đắt đỏ, nền kinh tế lỡ mất chuyến tàu chuyển đổi xanh." },
  REALIST: { title: "Nhà kỹ trị thực dụng", type: "good", desc: "Bạn sống sót qua nhiệm kỳ đầy bão táp bằng các quyết định giật gấu vá vai. Không ai thực sự hài lòng, nhưng ở tầm vĩ mô, bạn đã giữ cho đất nước không sụp đổ." },
  LEGEND: { title: "Huyền thoại điều tiết", type: "legend", desc: "Bạn là thiên tài giải phẫu hệ thống. Biết lúc nào nên để bàn tay vô hình của thị trường nhảy vào, lúc nào cần bàn tay sắt của Nhà nước can thiệp. Tối ưu hóa lợi nhuận, giữ vững lòng dân!" }
};
