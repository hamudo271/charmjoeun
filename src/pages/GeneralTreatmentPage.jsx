const GeneralTreatmentPage = () => {
    const treatments = [
        {
            id: "wisdom",
            title: "사랑니 발치",
            desc: "매복 사랑니도 안전하게 발치합니다.",
            content: ["입안 제일 뒤쪽의 세 번째 어금니", "공간 부족으로 인한 매복 가능성", "정밀 진단 후 안전 발치"],
            icon: "dentistry" // specific icon if available
        },
        {
            id: "tmj",
            title: "턱관절 장애",
            desc: "턱관절 소리, 통증을 치료합니다.",
            content: ["입을 벌릴 때 소리가 남", "턱이나 귀 주위의 통증", "입이 잘 벌어지지 않음"],
            icon: "hearing"
        },
        {
            id: "cavity",
            title: "충치 치료",
            desc: "자연치아를 살리는 단계별 치료.",
            content: ["초기: 레진 치료 (법랑질)", "중기: 인레이 치료 (상아질)", "말기: 신경치료 및 크라운 (치수염)"],
            icon: "coronavirus"
        },
        {
            id: "denture",
            title: "틀니 치료",
            desc: "잃어버린 씹는 즐거움을 되찾아드립니다.",
            content: ["완전 틀니 / 부분 틀니", "건강보험 적용 틀니 가능", "맞춤형 정밀 제작"],
            icon: "sentiment_satisfied"
        },
        {
            id: "prosthetic",
            title: "보철 치료",
            desc: "손상된 치아 기능을 회복합니다.",
            content: ["인레이 (금, 레진, 세라믹)", "크라운 (지르코니아 등)", "브릿지 치료"],
            icon: "construction"
        },
        {
            id: "aesthetic",
            title: "심미 보철",
            desc: "아름다운 미소를 디자인합니다.",
            content: ["라미네이트 (최소 삭제)", "올세라믹", "잇몸 성형"],
            icon: "auto_awesome"
        },
        {
            id: "whitening",
            title: "치아 미백",
            desc: "밝고 환한 치아를 만들어드립니다.",
            content: ["변색 원인 정밀 분석", "전문가 미백 프로그램", "저자극 미백제 사용"],
            icon: "light_mode"
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-white dark:bg-background-dark">
             <div className="bg-surface-light dark:bg-gray-900 py-20 px-6 text-center">
                <span className="text-primary font-bold tracking-widest uppercase mb-2 block">General Care</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">일반 진료</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    충치 치료부터 사랑니, 턱관절까지<br/>
                    기본에 충실한 진료로 치아 건강을 지킵니다.
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">{item.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-gray-500 font-medium mb-6">{item.desc}</p>
                            
                            <ul className="space-y-3">
                                {item.content.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 flex-shrink-0 group-hover:bg-primary transition-colors"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeneralTreatmentPage;
