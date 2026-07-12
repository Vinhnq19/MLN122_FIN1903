export const ENDINGS = [
    {
        rank: 8,
        title: "Hạng 8: Kỷ nguyên tăm tối",
        condition: (game) => game.stability <= 0,
        description: "Hệ thống hạ tầng điện nước quốc gia bị rã lưới toàn diện (Blackout). Đất nước chìm trong bóng tối và mất nước kéo dài nhiều tuần. Mọi hoạt động sản xuất, công nghiệp, giao thông và sinh hoạt bị tê liệt hoàn toàn.",
        reason: "Tại sao lại có kết cục này: Đây là hậu quả của tư duy \"Kỹ thuật vị dân túy\". Bạn đã liên tục đưa ra các quyết định chiều chuộng lòng dân hoặc tiết kiệm ngân sách ngắn hạn mà phớt lờ các cảnh báo kỹ thuật vật lý (như chạy cố trạm biến áp quá tải, đón nhận ồ ạt điện tư nhân mà không nâng cấp đường dây, hoặc không bảo trì ống nước). Ngành điện nước có một đặc thù: khi giới hạn chịu tải vật lý bị phá vỡ, sự sụp đổ sẽ diễn ra theo hiệu ứng domino chỉ trong vài giây, không thể cứu vãn bằng tiền hay lòng dân."
    },
    {
        rank: 7,
        title: "Hạng 7: Bạo loạn năng lượng",
        condition: (game) => game.satisfaction <= 0,
        description: "Các làn sóng biểu tình, bãi công quy mô lớn nổ ra khắp các đô thị nhằm phản đối chính sách năng lượng. Giá cả hàng hóa phi mã do chi phí điện nước tăng cao, đẩy nền kinh tế vào suy thoái nghiêm trọng và mất ổn định chính trị.",
        reason: "Tại sao lại có kết cục này: Hậu quả của tư duy \"Kinh tế học máu lạnh\". Bạn quá áp lực về mặt tài chính hoặc bị cuốn theo cái bẫy tối đa hóa lợi nhuận của tư nhân hóa, liên tục ép người dân chịu giá điện nước tăng đột biến, cắt điện sinh hoạt một cách phũ phàng để ưu ái nhà máy. Khi chi phí cho các nhu cầu thiết yếu vượt quá sức chịu đựng của người nghèo, công bằng xã hội bị phá vỡ, lòng dân chuyển thành sự phẫn nộ làm sụp đổ hệ thống từ bên trong."
    },
    {
        rank: 6,
        title: "Hạng 6: Vỡ nợ quốc gia",
        condition: (game) => game.budget <= 0,
        description: "Tập đoàn năng lượng quốc gia tuyên bố phá sản với những khoản nợ khổng lồ không thể chi trả. Chính phủ buộc phải bán tháo lưới điện quốc gia và các nhà máy cốt lõi cho các quỹ đầu tư nước ngoài để siết nợ, đánh mất quyền tự chủ chiến lược.",
        reason: "Tại sao lại có kết cục này: Hậu quả của tư duy \"Bao cấp ảo tưởng\". Bạn vì muốn giữ hình ảnh \"vị cứu tinh\" trong mắt người dân đã liên tục dùng ngân sách và tiền thuế để bù lỗ cho việc mua đắt bán rẻ, hoặc tự gánh toàn bộ chi phí chuyển đổi xanh đắt đỏ mà cự tuyệt sự tham gia của dòng vốn tư nhân. Ngân sách quốc gia luôn có hạn; khi bơm tiền vô tội vạ mà không có nguồn thu bù đắp, quả bom nợ công sẽ phát nổ."
    },
    {
        rank: 5,
        title: "Hạng 5: Tập đoàn máu lạnh",
        condition: (game) => game.budget > 70 && game.satisfaction < 30,
        description: "Doanh nghiệp năng lượng giàu nứt vách, dòng tiền rực rỡ, hạ tầng hiện đại. Tuy nhiên, bất bình đẳng xã hội sâu sắc, người nghèo và các vùng nông thôn xa xôi bị bỏ rơi hoàn toàn vì \"không mang lại lợi nhuận\".",
        reason: "Tại sao lại có kết cục này: Bạn đã vận hành ngành điện nước giống như một công ty thương mại thuần túy. Bạn chọn mở cửa thị trường tự do quá đà, tăng giá theo cơ chế thị trường sòng phẳng và bán cổ phần cho tư nhân để thu tiền về. Kết cục này chứng minh một sự thật: Nếu tư nhân hóa hoàn toàn, hạ tầng sẽ chỉ phục vụ người giàu và các đô thị lớn có lãi, mục tiêu an sinh xã hội sẽ bị nghiền nát."
    },
    {
        rank: 4,
        title: "Hạng 4: Nhà dân túy ảo tưởng",
        condition: (game) => game.satisfaction > 70 && game.budget < 30,
        description: "Bạn là vị thánh trong mắt công chúng vì điện nước luôn rẻ mạt và tràn trề. Nhưng hệ thống đang rệu rã từng ngày và bạn đang để lại một \"di sản\" là khoản nợ công khổng lồ bắt buộc khóa sau phải tăng giá điện để trả nợ.",
        reason: "Tại sao lại có kết cục này: Bạn bị kẹt vào cơ chế lấy lòng đám đông. Cứ có xung đột là chọn phương án chi tiền gánh lỗ hoặc hoãn tăng giá vô thời hạn. Đây là kiểu quản trị \"giật gấu vá vai\", chuyển áp lực tài chính từ thế hệ này sang thế hệ khác bằng nợ vay, một mô hình phát triển hoàn toàn không bền vững."
    },
    {
        rank: 3,
        title: "Hạng 3: Pháo đài bảo thủ",
        condition: (game) => game.stability > 70 && game.budget <= 40 && game.satisfaction <= 40,
        description: "Lưới điện vững như bàn thạch, độc quyền nhà nước được giữ vững tuyệt đối. Tuy nhiên, giá thành vận hành quá đắt đỏ do công nghệ lạc hậu, nền kinh tế điêu đứng vì bị thế giới áp thuế carbon nặng nề do chậm chuyển đổi xanh.",
        reason: "Tại sao lại có kết cục này: Hậu quả của nỗi sợ mất kiểm soát. Vì quá sợ rủi ro an ninh năng lượng hoặc sợ tư nhân làm loạn, bạn đã cự tuyệt mọi cơ chế thị trường (như DPPA, tách A0 hay xã hội hóa). Quyết định này giúp quốc gia an toàn về mặt kỹ thuật nhưng làm triệt tiêu tính cạnh tranh, khiến nền kinh tế bị cô lập và tụt hậu so với xu thế xanh của thế giới."
    },
    {
        rank: 1,
        title: "Hạng 1: Huyền thoại điều tiết",
        condition: (game) => game.stability >= 55 && game.budget >= 55 && game.satisfaction >= 55,
        description: "Đạt tới trạng thái cân bằng hoàn hảo. Nhà nước giữ vững được huyết mạch truyền tải và an ninh quốc gia, nhưng vẫn khéo léo thu hút hàng tỷ USD vốn tư nhân vào phát triển nguồn điện xanh. Kinh tế tăng trưởng tốt, lòng dân đồng thuận cao.",
        reason: "Tại sao lại có kết cục này: Bạn là một thiên tài điều phối. Bạn biết chính xác khâu nào cần \"bàn tay sắt\" độc quyền của Nhà nước để bảo vệ chủ quyền, và khâu nào nên giải phóng cho \"bàn tay vô hình\" của tư nhân nhảy vào cạnh tranh để tối ưu chi phí. Bạn sử dụng cơ chế thị trường để phục vụ mục tiêu xã hội chứ không để thị trường thao túng xã hội."
    },
    {
        rank: 2,
        title: "Hạng 2: Nhà kỹ trị thực dụng",
        condition: (game) => true, // Fallback nếu không khớp các điều kiện cực đoan trên
        description: "Ngân sách vừa đủ sống, hệ thống thỉnh thoảng vẫn có sự cố nhỏ, người dân đôi lúc kêu ca về giá nhưng chấp nhận được. Đất nước vượt qua 5 năm bão táp một cách an toàn.",
        reason: "Tại sao lại có kết cục này: Đây là hình ảnh phản chiếu chân thực nhất của các nhà quản lý vĩ mô ngoài đời thực. Bạn đã hiểu được nghệ thuật của sự thỏa hiệp. Bạn biết rằng không bao giờ có một quyết định làm hài lòng tất cả; bạn chấp nhận lúc này chịu lỗ một chút để dân yên lòng, lúc sau phải tăng giá một chút để cứu ngân sách. Đây là kết quả tốt, thể hiện tư duy thực tế, khôn ngoan."
    }
];

export const SCENARIOS = [
    // NĂM 1
    {
        id: "1.1",
        title: "1.1: Đêm hè mất điện",
        situation: "Miền Bắc bước vào đợt nắng nóng kỷ lục, các hồ thủy điện cạn trơ đáy. Nguồn cung thiếu hụt nghiêm trọng, đe dọa trực tiếp đến sinh hoạt của người dân và dây chuyền sản xuất của các nhà máy lớn FDI.",
        image: "./src/assets/sit1_1.png",
        options: [
            {
                text: "A. Ưu tiên kinh tế: Cắt điện luân phiên vùng sinh hoạt của người dân, ưu tiên cấp điện liên tục cho các khu công nghiệp lớn để giữ chân dòng vốn FDI.",
                effects: { budget: 5, satisfaction: -15, stability: 10 },
                feedback: "Bạn đã bảo vệ được hình ảnh môi trường đầu tư trong mắt khối ngoại, nhưng người dân đang đổ mồ hôi và trút giận lên sự điều hành của bạn.",
                image: "./src/assets/opt1_1_a.png"
            },
            {
                text: "B. Ưu tiên an sinh: Mua điện khẩn cấp từ nước láng giềng với giá cao gấp 3 lần bình thường để đảm bảo người dân không phải chịu nóng.",
                effects: { budget: -20, satisfaction: 15, stability: 5 },
                feedback: "Người dân hoan hô bạn như một người hùng, nhưng ngân khố quốc gia đang rỉ máu vì giá điện nhập khẩu quá đắt đỏ.",
                image: "./src/assets/opt1_1_b.png"
            },
            {
                text: "C. Kêu gọi tiết kiệm: Không cắt điện, không mua thêm, phát động phong trào toàn dân tắt bớt thiết bị điện, các cơ quan giảm 50% đèn chiếu sáng.",
                effects: { budget: 0, satisfaction: -5, stability: 5 },
                feedback: "Một biện pháp an toàn và tiết kiệm. Dù phải sống trong cảnh tranh tối tranh sáng, ít ra bạn không làm thủng ngân sách hay cắt điện hoàn toàn.",
                image: "./src/assets/opt1_1_c.png"
            }
        ]
    },
    {
        id: "1.2",
        title: "1.2: Quả bom nợ từ năm cũ",
        situation: "Hệ quả từ quyết định xử lý đợt nắng nóng trước: Tập đoàn điện nước quốc gia báo cáo khoản lỗ khổng lồ, âm vốn nghiêm trọng, không còn tiền để vận hành bình thường.",
        image: "./src/assets/sit1_2.png",
        options: [
            {
                text: "A. Cơ chế thị trường: Tăng giá bán lẻ điện ngay lập tức thêm 15% để tập đoàn tự cứu lấy mình và có dòng tiền tái đầu tư.",
                effects: { budget: 20, satisfaction: -25, stability: 0 },
                feedback: "Dòng tiền đã quay lại, nhưng hóa đơn tiền điện tăng vọt khiến lạm phát leo thang và sự bất mãn trong xã hội lên mức báo động.",
                image: "./src/assets/opt1_2_a.png"
            },
            {
                text: "B. Nhà nước bao cấp: Giữ nguyên giá điện để ổn định đời sống, xin Chính phủ dùng tiền thuế của dân để khoanh nợ và cấp bù lỗ.",
                effects: { budget: -15, satisfaction: 10, stability: -5 },
                feedback: "Người dân yên tâm vì giá điện không tăng, nhưng lấy tiền thuế bù lỗ chỉ là cách chuyển khoản nợ từ túi này sang túi khác của quốc gia.",
                image: "./src/assets/opt1_2_b.png"
            },
            {
                text: "C. Bù chéo xã hội: Chỉ tăng giá điện đối với các hộ dùng nhiều (biệt thự, kinh doanh lớn), giữ nguyên giá cho người nghèo và nông thôn.",
                effects: { budget: 10, satisfaction: -10, stability: 0 },
                feedback: "Người nghèo được bảo vệ, nhưng giới doanh nghiệp và trung lưu phản đối kịch liệt vì cảm thấy họ đang phải cõng phần nợ thay cho người khác.",
                image: "./src/assets/opt1_2_c.png"
            }
        ]
    },
    {
        id: "1.3",
        title: "1.3: Sự cố trạm biến áp",
        situation: "Do thiếu hụt ngân sách bảo trì từ giai đoạn trước, một trạm biến áp trục chính gặp sự cố kỹ thuật lớn, nguy cơ cháy nổ dây chuyền.",
        image: "./src/assets/sit1_3.png",
        options: [
            {
                text: "A. Kỹ trị an toàn: Đóng cửa trạm để sửa chữa toàn diện, chấp nhận mất điện diện rộng một vùng trong vòng 2 ngày.",
                effects: { budget: -5, satisfaction: -15, stability: 20 },
                feedback: "Bạn đã ngăn chặn được một thảm họa vật lý tồi tệ hơn, nhưng việc cắt điện 2 ngày khiến hoạt động kinh tế địa phương tê liệt hoàn toàn.",
                image: "./src/assets/opt1_3_a.png"
            },
            {
                text: "B. Chạy cố hệ thống: Cho vận hành cầm chừng, không sửa ngay để tránh cắt điện của dân, cầu nguyện không có sự cố lớn hơn.",
                effects: { budget: 5, satisfaction: 0, stability: -20 },
                feedback: "Một ván cược nguy hiểm! Không ai bị mất điện hôm nay, nhưng bạn đang ngồi trên một quả bom nổ chậm đe dọa sự an toàn của toàn bộ lưới điện.",
                image: "./src/assets/opt1_3_b.png"
            },
            {
                text: "C. Xã hội hóa khẩn cấp: Thuê các kỹ sư của tập đoàn tư nhân vào sửa chữa siêu tốc với chi phí đắt đỏ để không phải cắt điện lâu.",
                effects: { budget: -15, satisfaction: -5, stability: 15 },
                feedback: "Vấn đề kỹ thuật được giải quyết thần tốc nhờ sức mạnh của khối tư nhân, nhưng ngân sách quốc gia lại phải chịu một lỗ hổng lớn.",
                image: "./src/assets/opt1_3_c.png"
            }
        ]
    },

    // NĂM 2
    {
        id: "2.1",
        title: "2.1: Lưới điện nghẽn mạch",
        situation: "Nhà nước khuyến khích làm năng lượng sạch, các công ty tư nhân ồ ạt xây nhà máy điện mặt trời ở miền Trung. Tuy nhiên, đường dây truyền tải trục chính bị quá tải vì không thể hấp thụ hết.",
        image: "./src/assets/sit2_1.png", // Re-use old assets for Year 2-5 or we will use fallback dynamically in frontend
        options: [
            {
                text: "A. Cắt giảm kỹ thuật: Ép các nhà máy tư nhân ngừng phát điện lên lưới để bảo vệ an toàn hệ thống, mặc kệ họ kêu cứu vì nguy cơ phá sản.",
                effects: { budget: 0, satisfaction: -15, stability: 20 },
                feedback: "Lưới điện được an toàn tuyệt đối, nhưng các nhà đầu tư tư nhân khóc ròng và mất niềm tin vào chính sách của bạn.",
                image: "./src/assets/opt2_1_a.png"
            },
            {
                text: "B. Chấp nhận rủi ro: Đón nhận toàn bộ công suất điện tư nhân, chấp nhận chạy quá tải hệ thống trục dọc và đối mặt nguy cơ cháy lưới.",
                effects: { budget: -10, satisfaction: 5, stability: -25 },
                feedback: "Các nhà máy kiếm được tiền, nhưng bạn đang đưa cả quốc gia vào rủi ro rã lưới điện cực kỳ nguy hiểm.",
                image: "./src/assets/opt2_1_b.png"
            },
            {
                text: "C. Ép tư nhân tự chủ: Ra luật buộc các công ty tư nhân phải tự bỏ tiền xây hệ thống pin lưu trữ điện mới được phép nối vào lưới điện quốc gia.",
                effects: { budget: 5, satisfaction: -10, stability: 10 },
                feedback: "Bạn giảm bớt gánh nặng cho hệ thống, nhưng rào cản tài chính mới này khiến nhiều dự án năng lượng sạch phải đắp chiếu.",
                image: "./src/assets/opt2_1_c.png"
            }
        ]
    },
    {
        id: "2.2",
        title: "2.2: Sức ép từ FDI",
        situation: "Các tập đoàn công nghệ ngoại (Samsung, Apple...) yêu cầu được mua điện sạch trực tiếp từ các trang trại tư nhân (cơ chế DPPA), không qua Nhà nước nữa.",
        image: "./src/assets/sit2_2.png",
        options: [
            {
                text: "A. Mở cửa thị trường: Đồng ý cho tư nhân tự mua bán tự do với nhau, Nhà nước chỉ đứng ra thu phí truyền tải nhỏ.",
                effects: { budget: -15, satisfaction: 15, stability: -5 },
                feedback: "Khối FDI rất hài lòng và mở rộng đầu tư, nhưng Nhà nước mất đi một nguồn thu béo bở để trợ giá cho người nghèo.",
                image: "./src/assets/opt2_2_a.png"
            },
            {
                text: "B. Duy trì độc quyền: Kiên quyết từ chối. Mọi nguồn điện phải bán cho Nhà nước với giá rẻ để Nhà nước điều tiết giá đồng đều.",
                effects: { budget: 15, satisfaction: -15, stability: 5 },
                feedback: "Ngân sách dồi dào, nhưng các tập đoàn đa quốc gia đe dọa sẽ chuyển nhà máy sang quốc gia khác có chính sách linh hoạt hơn.",
                image: "./src/assets/opt2_2_b.png"
            },
            {
                text: "C. Thí điểm giới hạn: Cho phép mua bán trực tiếp ở một vài khu công nghiệp lớn và đánh thuế điều tiết cao.",
                effects: { budget: 5, satisfaction: 5, stability: 0 },
                feedback: "Một bước lùi chiến thuật! Cả Nhà nước và tư nhân đều có chút lợi ích, dù chưa thực sự giải quyết triệt để vấn đề.",
                image: "./src/assets/opt2_2_c.png"
            }
        ]
    },
    {
        id: "2.3",
        title: "2.3: Cái bẫy giá điện",
        situation: "Do quỹ \"bù chéo\" cạn kiệt, chi phí kéo điện đến biên giới, hải đảo đang lỗ nặng. Nhà nước không còn tiền để bù đắp giá điện rẻ cho vùng sâu vùng xa.",
        image: "./src/assets/sit2_3.png",
        options: [
            {
                text: "A. Xóa bỏ bao cấp: Cắt bớt phần trợ giá, chấp nhận nâng giá điện nông thôn và vùng sâu vùng xa lên bằng với thành thị.",
                effects: { budget: 15, satisfaction: -20, stability: 0 },
                feedback: "Tập đoàn hết lỗ, nhưng sự chênh lệch giàu nghèo tăng cao. Người dân vùng sâu cảm thấy bị chính phủ bỏ rơi.",
                image: "./src/assets/opt2_3_a.png"
            },
            {
                text: "B. Hy sinh hạ tầng: Lấy tiền từ quỹ bảo trì lưới điện đô thị để tiếp tục bù lỗ, giữ điện giá rẻ cho vùng nghèo.",
                effects: { budget: 0, satisfaction: 10, stability: -15 },
                feedback: "An sinh xã hội được giữ vững, nhưng hạ tầng tại các thành phố lớn bắt đầu rỉ sét và dễ gặp sự cố vì không có tiền bảo dưỡng.",
                image: "./src/assets/opt2_3_b.png"
            },
            {
                text: "C. Vay nợ an sinh: Vay tín dụng ngân hàng để tiếp tục duy trì mức trợ giá an sinh xã hội cho nông thôn, gánh nợ lớn.",
                effects: { budget: -15, satisfaction: 10, stability: 0 },
                feedback: "Người nghèo vẫn có điện rẻ, nhưng quả bom nợ công ngày càng phình to, chờ thế hệ sau giải quyết.",
                image: "./src/assets/opt2_3_c.png"
            }
        ]
    },

    // NĂM 3
    {
        id: "3.1",
        title: "3.1: Xung đột Nước - Điện",
        situation: "Hạn hán kéo dài khiến hồ chứa giảm sâu. Nông dân hạ lưu kêu cứu vì ruộng chết khô, nhưng nếu xả nước cứu lúa thì thủy điện không còn áp lực phát điện.",
        image: "./src/assets/sit3_1.png",
        options: [
            {
                text: "A. Ưu tiên công nghiệp: Giữ nước lại để phát điện, bảo đảm không mất điện thành phố, chấp nhận nông nghiệp chịu thiệt hại.",
                effects: { budget: 10, satisfaction: -20, stability: 15 },
                feedback: "Các nhà máy ở thành phố vẫn chạy tốt, nhưng nông dân mất trắng vụ mùa. Đảm bảo điện đã đổi bằng mồ hôi và nước mắt hạ lưu.",
                image: "./src/assets/opt3_1_a.png"
            },
            {
                text: "B. Ưu tiên nông dân: Mở cửa xả nước cứu lúa cho bà con, chấp nhận thiếu điện và tốn tiền chạy nhiệt điện dầu bù đắp.",
                effects: { budget: -15, satisfaction: 25, stability: -15 },
                feedback: "Ruộng đồng được cứu sống! Nông dân biết ơn bạn, nhưng nguy cơ mất điện tăng cao và chi phí chạy điện dầu đang đốt sạch ngân sách.",
                image: "./src/assets/opt3_1_b.png"
            },
            {
                text: "C. Điều tiết chia đôi: Cấp nước theo khung giờ nghiêm ngặt, cả nông dân và nhà máy điện đều phải cắt giảm 50% nhu cầu.",
                effects: { budget: -5, satisfaction: -5, stability: 5 },
                feedback: "Không ai thực sự vui vẻ, lúa vẫn héo một nửa và điện vẫn chập chờn. Nhưng đây là cách sinh tồn duy nhất khi thiên nhiên nổi giận.",
                image: "./src/assets/opt3_1_c.png"
            }
        ]
    },
    {
        id: "3.2",
        title: "3.2: Hạ tầng rệu rã",
        situation: "Hệ thống đường ống nước sạch đô thị bị xuống cấp, tỷ lệ rò rỉ lên tới 30%. Ngân sách công không còn tiền sửa.",
        image: "./src/assets/sit3_2.png",
        options: [
            {
                text: "A. Tư nhân hóa: Bán một phần cổ phần mạng lưới nước cho tập đoàn tư nhân để họ tự bỏ vốn nâng cấp, đổi lại họ được tăng giá nước gấp đôi.",
                effects: { budget: 20, satisfaction: -20, stability: 15 },
                feedback: "Đường ống được thay mới cáu cạnh, nước chảy mạnh. Nhưng mỗi khi cầm hóa đơn tiền nước, người dân lại nghiến răng tức giận.",
                image: "./src/assets/opt3_2_a.png"
            },
            {
                text: "B. Giữ nguyên hiện trạng: Kiên quyết giữ sở hữu nhà nước, sửa chữa nhỏ giọt bằng vốn công, chấp nhận người dân thỉnh thoảng bị mất nước.",
                effects: { budget: -15, satisfaction: 5, stability: -10 },
                feedback: "Giá nước vẫn rẻ, nhưng tình trạng vỡ ống nước xảy ra như cơm bữa. Nước thất thoát ra lòng đất mỗi ngày cắn mòn tài sản quốc gia.",
                image: "./src/assets/opt3_2_b.png"
            },
            {
                text: "C. Thu phí bảo trì: Thêm một khoản 'phí hạ tầng nước' vào hóa đơn hằng tháng để lấy tiền sửa ống nước ngay.",
                effects: { budget: 5, satisfaction: -15, stability: 15 },
                feedback: "Giải pháp trực diện và hiệu quả về mặt hạ tầng, nhưng người dân cảm thấy họ đang phải gánh thêm một loại thuế vô lý.",
                image: "./src/assets/opt3_2_c.png"
            }
        ]
    },
    {
        id: "3.3",
        title: "3.3: Ô nhiễm đầu nguồn",
        situation: "Một sự cố xả thải hóa học từ nhà máy tư nhân xảy ra gần nguồn sông cung cấp nước sạch cho toàn thành phố.",
        image: "./src/assets/sit3_3.png",
        options: [
            {
                text: "A. An toàn tuyệt đối: Đóng cửa nhà máy nước sạch ngay lập tức để sục rửa, chấp nhận cắt nước toàn thành phố trong 3 ngày.",
                effects: { budget: -10, satisfaction: -25, stability: 20 },
                feedback: "Hệ thống nước được bảo vệ an toàn khỏi chất độc, nhưng cảnh hàng triệu người tranh giành từng xô nước cứu trợ thực sự là một cơn ác mộng.",
                image: "./src/assets/opt3_3_a.png"
            },
            {
                text: "B. Xử lý cầm chừng: Không cắt nước diện rộng, tăng hàm lượng clo khử trùng và khuyến cáo người dân chỉ dùng tắm giặt, không ăn uống.",
                effects: { budget: 0, satisfaction: -15, stability: -10 },
                feedback: "Nước vẫn chảy từ vòi, nhưng bốc mùi hóa chất nồng nặc. Lòng tin của người dân vào hệ thống an toàn quốc gia bị rạn nứt.",
                image: "./src/assets/opt3_3_b.png"
            },
            {
                text: "C. Ứng phó khẩn cấp: Huy động lực lượng công ích và chuyên gia xử lý hóa chất trực tiếp tại dòng sông với chi phí khổng lồ từ ngân sách.",
                effects: { budget: -25, satisfaction: 15, stability: 10 },
                feedback: "Bạn đã cứu được nguồn nước và giữ nguyên sinh hoạt cho người dân, nhưng số tiền bỏ ra tương đương ngân sách xây cả chục trường học.",
                image: "./src/assets/opt3_3_c.png"
            }
        ]
    },

    // NĂM 4
    {
        id: "4.1",
        title: "4.1: Sức ép Net Zero",
        situation: "Theo cam kết giảm phát thải quốc tế, các tổ chức tài chính ngừng cấp vốn cho 3 dự án nhiệt điện than đang xây dựng dở dang của nước ta.",
        image: "./src/assets/sit4_1.png",
        options: [
            {
                text: "A. Tuân thủ quốc tế: Hủy bỏ hoàn toàn các dự án điện than này, chấp nhận mất trắng số tiền hàng tỷ USD đã đổ vào móng công trình.",
                effects: { budget: -25, satisfaction: 15, stability: -15 },
                feedback: "Quốc tế khen ngợi Việt Nam vì cam kết môi trường, nhưng việc đập bỏ hàng tỷ USD đầu tư khiến nguồn điện trong nước bị thiếu hụt nghiêm trọng.",
                image: "./src/assets/opt4_1_a.png"
            },
            {
                text: "B. Cố đấm ăn xôi: Tự bỏ tiền ngân sách hoặc vay nợ lãi suất cao từ nguồn khác để xây tiếp, vì nước ta đang rất cần nguồn điện ổn định này.",
                effects: { budget: -20, satisfaction: -5, stability: 25 },
                feedback: "Nhà máy vẫn được xây lên, cung cấp nguồn điện nền cực kỳ ổn định. Tuy nhiên, vết nhơ môi trường và cục nợ khổng lồ sẽ đeo bám quốc gia.",
                image: "./src/assets/opt4_1_b.png"
            },
            {
                text: "C. Hợp tác PPP: Kêu gọi các tập đoàn tư nhân trong nước bỏ tiền mua lại và hoàn thiện nhà máy, Nhà nước cam kết mua lại điện.",
                effects: { budget: 10, satisfaction: -10, stability: 10 },
                feedback: "Dự án được giải cứu mà không tốn thêm tiền công, nhưng bạn đã trao cho tư nhân quyền định giá đối với nguồn điện chủ lực.",
                image: "./src/assets/opt4_1_c.png"
            }
        ]
    },
    {
        id: "4.2",
        title: "4.2: Hàng rào Thuế Carbon",
        situation: "Do tiếp tục dùng điện than, phương Tây áp đặt 'Thuế carbon' rất nặng lên hàng hóa xuất khẩu Việt Nam, doanh nghiệp điêu đứng.",
        image: "./src/assets/sit4_2.png",
        options: [
            {
                text: "A. Hỗ trợ doanh nghiệp: Trích ngân sách quốc gia để cấp bù, hỗ trợ thuế cho các doanh nghiệp xuất khẩu vượt qua giai đoạn khó khăn.",
                effects: { budget: -20, satisfaction: 15, stability: 0 },
                feedback: "Doanh nghiệp thở phào nhẹ nhõm vì có chính phủ đứng ra đỡ đạn, nhưng túi tiền của Nhà nước đang vơi đi với tốc độ chóng mặt.",
                image: "./src/assets/opt4_2_a.png"
            },
            {
                text: "B. Tự lực cánh sinh: Bắt buộc doanh nghiệp tự chuyển đổi công nghệ hoặc tự chịu thuế, Nhà nước không dùng tiền công để cứu trợ tư nhân.",
                effects: { budget: 15, satisfaction: -15, stability: 5 },
                feedback: "Nhà nước bảo toàn được ngân sách, nhưng hàng loạt doanh nghiệp phá sản vì không chịu nổi nhiệt, kéo theo tỷ lệ thất nghiệp tăng vọt.",
                image: "./src/assets/opt4_2_b.png"
            },
            {
                text: "C. Thu thuế nội địa: Đánh thuế môi trường thật nặng vào chính các nhà máy điện than trong nước để lấy tiền trợ cấp cho doanh nghiệp xanh.",
                effects: { budget: 5, satisfaction: -10, stability: -5 },
                feedback: "Một vòng lặp oái oăm: Đánh thuế điện than làm giá điện trong nước tăng cao, gây khó khăn ngược lại cho toàn bộ nền kinh tế.",
                image: "./src/assets/opt4_2_c.png"
            }
        ]
    },
    {
        id: "4.3",
        title: "4.3: Canh bạc LNG",
        situation: "Để thay thế than, Nhà nước chuyển sang điện khí LNG. Tuy nhiên, nhiên liệu phải nhập khẩu 100% và giá khí thế giới đang biến động thất thường.",
        image: "./src/assets/sit4_3.png",
        options: [
            {
                text: "A. Mua bảo hiểm giá: Ký hợp đồng mua khí dài hạn với giá cao cố định từ đối tác ngoại để đảm bảo hệ thống luôn có nhiên liệu.",
                effects: { budget: -15, satisfaction: 0, stability: 20 },
                feedback: "Hệ thống điện chạy êm ru không bao giờ sợ thiếu nhiên liệu, nhưng bạn đã tự trói mình vào một bản hợp đồng đắt đỏ trong chục năm.",
                image: "./src/assets/opt4_3_a.png"
            },
            {
                text: "B. Lướt sóng thị trường: Mua sỉ theo giá thị trường tự do hằng tháng, chấp nhận rủi ro giá có thể tăng vọt nếu có xung đột.",
                effects: { budget: 10, satisfaction: 0, stability: -15 },
                feedback: "Nhờ giá khí đang rẻ, bạn tiết kiệm được bộn tiền. Nhưng nếu ngày mai có biến động địa chính trị, lưới điện sẽ lập tức tê liệt.",
                image: "./src/assets/opt4_3_b.png"
            },
            {
                text: "C. Tái khai thác nội địa: Giảm bớt tỷ trọng điện khí, quay lại tận dụng tối đa nguồn than đá và thủy điện có sẵn trong nước.",
                effects: { budget: 15, satisfaction: -15, stability: 5 },
                feedback: "Tự chủ được năng lượng và giữ chặt ngân khố, nhưng khói bụi từ nhiệt điện than khiến bầu trời thành phố mù mịt trở lại.",
                image: "./src/assets/opt4_3_c.png"
            }
        ]
    },

    // NĂM 5
    {
        id: "5.1",
        title: "5.1: Tách điều độ quốc gia",
        situation: "Để minh bạch, quốc tế yêu cầu phải tách Trung tâm điều độ hệ thống điện (A0) khỏi tập đoàn độc quyền để chuyển về Bộ quản lý.",
        image: "./src/assets/sit5_1.png",
        options: [
            {
                text: "A. Đồng ý tách bạch: Chuyển hoàn toàn về Bộ. Tư nhân yên tâm đầu tư, nhưng bộ máy hành chính mới vận hành lúng túng gây trễ nải.",
                effects: { budget: -5, satisfaction: 15, stability: -15 },
                feedback: "Thị trường minh bạch hơn, khối tư nhân hoan hỉ. Nhưng kỹ năng điều hành của đội ngũ hành chính mới khiến hệ thống điện nhiều phen thót tim.",
                image: "./src/assets/opt5_1_a.png"
            },
            {
                text: "B. Kiên quyết giữ lại: Giữ nguyên A0 trong tập đoàn để đảm bảo mệnh lệnh chỉ huy tối cao, điều phối cắt điện khẩn cấp nhanh nhất.",
                effects: { budget: 10, satisfaction: -10, stability: 15 },
                feedback: "An ninh điều độ được giữ vững tuyệt đối như một pháo đài. Tuy nhiên, tư nhân tố cáo tập đoàn vừa đá bóng vừa thổi còi.",
                image: "./src/assets/opt5_1_b.png"
            },
            {
                text: "C. Mô hình nửa vời: Thành lập công ty độc lập nhưng vốn 100% vẫn thuộc tập đoàn quản lý nhằm đối phó với sức ép minh bạch.",
                effects: { budget: 5, satisfaction: 5, stability: 0 },
                feedback: "Một thủ thuật che mắt tài tình. Tuy không thực sự minh bạch, nhưng bạn đã xoa dịu được dư luận mà không làm mất kiểm soát.",
                image: "./src/assets/opt5_1_c.png"
            }
        ]
    },
    {
        id: "5.2",
        title: "5.2: Tối hậu thư thâu tóm",
        situation: "Quỹ đầu tư quốc tế ngỏ ý bỏ tiền xóa sạch toàn bộ nợ cho ngành điện, đổi lại họ muốn quyền vận hành đường dây 500kV trong 20 năm.",
        image: "./src/assets/sit5_2.png",
        options: [
            {
                text: "A. Bán mạch máu quốc gia: Chấp nhận giao lưới điện. Ngành điện sạch nợ, nhưng mất hoàn toàn công cụ điều tiết an ninh độc quyền.",
                effects: { budget: 35, satisfaction: 0, stability: -30 },
                feedback: "Túi tiền quốc gia rủng rỉnh chưa từng thấy! Nhưng từ ngày mai, nguồn sáng của đất nước sẽ bị quyết định bởi một bảng điện tử ở phố Wall.",
                image: "./src/assets/opt5_2_a.png"
            },
            {
                text: "B. Giữ vững chủ quyền: Từ chối thẳng thừng. Lưới điện là an ninh quốc gia tối cao, Nhà nước phải độc quyền nắm giữ, chấp nhận gánh nợ.",
                effects: { budget: -15, satisfaction: 10, stability: 20 },
                feedback: "Bạn đã bảo vệ thành công mạch máu của đất nước. Cái giá phải trả là sự khắc khổ tài chính sẽ còn kéo dài nhiều thế hệ.",
                image: "./src/assets/opt5_2_b.png"
            },
            {
                text: "C. Tư nhân hóa nhánh nhỏ: Chỉ cho phép tư nhân đấu thầu vận hành các đường nhánh nhỏ địa phương, kiên quyết giữ trục xương sống 500kV.",
                effects: { budget: 10, satisfaction: 5, stability: 5 },
                feedback: "Bạn vừa thu hút được một phần vốn ngoại, vừa giữ được thanh kiếm bảo vệ an ninh năng lượng trong tay Nhà nước.",
                image: "./src/assets/opt5_2_c.png"
            }
        ]
    },
    {
        id: "5.3",
        title: "5.3: Giá điện hai thành phần",
        situation: "Nhiệm kỳ sắp kết thúc, bạn phải chốt cơ chế giá điện mới: Thu phí cố định (tiền hạ tầng) + tiền điện thực tế tiêu thụ.",
        image: "./src/assets/sit5_3.png",
        options: [
            {
                text: "A. Áp dụng triệt để: Ban hành ngay lập tức cho toàn dân nhằm có nguồn thu lớn tái thiết hệ thống, bất chấp người dân kêu ca.",
                effects: { budget: 25, satisfaction: -25, stability: 10 },
                feedback: "Ngành điện có một dòng thu nhập khổng lồ, cố định hàng tháng để xây dựng tương lai, mặc cho hàng triệu người tiêu dùng nguyền rủa bạn.",
                image: "./src/assets/opt5_3_a.png"
            },
            {
                text: "B. Chỉ ép doanh nghiệp: Chỉ áp dụng cơ chế này đối với các nhà máy sản xuất công nghiệp lớn, miễn trừ hoàn toàn cho hộ gia đình.",
                effects: { budget: 10, satisfaction: 10, stability: -15 },
                feedback: "Người dân hoan hô sự công bằng này. Nhưng sức ép tài chính đè nặng lên khối sản xuất khiến kinh tế vĩ mô có dấu hiệu chững lại.",
                image: "./src/assets/opt5_3_b.png"
            },
            {
                text: "C. Hoãn vô thời hạn: Tiếp tục dùng cách tính giá điện lũy tiến bậc thang cũ để tránh gây sốc tâm lý cho xã hội.",
                effects: { budget: -10, satisfaction: 10, stability: -5 },
                feedback: "Mọi người thở phào vì hóa đơn không thay đổi. Nhưng việc từ chối cải cách khiến ngành năng lượng tiếp tục lún sâu vào vũng lầy trì trệ.",
                image: "./src/assets/opt5_3_c.png"
            }
        ]
    }
];
