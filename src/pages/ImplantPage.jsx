import { useState } from 'react';

const ImplantPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const sections = [
        {
            title: "개인 맞춤 임플란트",
            subtitle: "Personalized Implant",
            content: "구강의 모양은 개인마다 크기, 생김새 등이 모두 다릅니다. 참조은치과는 체계적인 검진을 통해 고객에게 딱 맞는 맞춤형 임플란트를 제작합니다.",
            features: ["개인별 잇몸 라인 고려", "최적의 교합 설계", "이물감 최소화"],
            img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
        },
        {
            title: "디지털 분석 임플란트",
            subtitle: "Digital Navigation",
            content: "3D CT 촬영과 컴퓨터 모의 시뮬레이션을 통해 수술 경로를 미리 파악하고, 개인 맞춤형 수술 유도 장치(가이드)를 제작하여 계획된 위치에 정확하게 식립합니다.",
            features: ["3D CT 정밀 진단", "모의 수술 진행", "절개 최소화"],
            img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
        },
        {
            title: "뼈이식 임플란트",
            subtitle: "Bone Graft",
            content: "잇몸뼈가 부족하거나 약한 경우, 자가골 또는 인공뼈를 이식하여 임플란트가 단단하게 고정될 수 있는 환경을 만듭니다.",
            features: ["안전한 이식재 사용", "임플란트 수명 증대", "잇몸 형태 복원"],
            img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
        },
        {
            title: "건강보험 임플란트",
            subtitle: "Insurance Benefit",
            content: "만 65세 이상 건강보험 가입자라면 누구나 평생 2개까지 본인 부담금 30%로 임플란트 시술이 가능합니다.",
            features: ["만 65세 이상 대상", "평생 2개 지원", "본인부담률 30%"],
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3"
        },
        {
            title: "발치 즉시 임플란트",
            subtitle: "One Day Implant",
            content: "발치와 동시에 임플란트를 식립하여 치료 기간을 단축하고 잇몸 뼈의 소실을 최소화하는 술식입니다.",
            features: ["내원 횟수 감소", "치료 기간 단축", "잇몸 위축 예방"],
            img: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-white dark:bg-background-dark">
            <div className="bg-surface-light dark:bg-gray-900 py-20 px-6 text-center">
                <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Implant Center</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">임플란트 클리닉</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    참조은치과의 임플란트는 자연치아와 가장 유사한 기능과 심미성을 회복시켜드립니다.
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
                {/* Desktop Tabs */}
                <div className="hidden lg:flex justify-center gap-4 mb-16 flex-wrap">
                    {sections.map((section, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                                activeTab === idx
                                    ? 'bg-primary text-white border-primary shadow-lg scale-105'
                                    : 'bg-white dark:bg-gray-800 text-gray-500 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                            }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 lg:p-16 flex flex-col justify-center">
                            <span className="text-primary font-bold tracking-widest uppercase mb-4">{sections[activeTab].subtitle}</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-8">{sections[activeTab].title}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                                {sections[activeTab].content}
                            </p>
                            <ul className="space-y-4">
                                {sections[activeTab].features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800 dark:text-gray-200 font-medium bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-80 lg:h-auto overflow-hidden bg-gray-100">
                            <img 
                                key={activeTab} // Trigger animation on change
                                src={sections[activeTab].img} 
                                alt={sections[activeTab].title} 
                                className="w-full h-full object-cover animate-fade-in-up" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-l"></div>
                        </div>
                    </div>
                </div>

                {/* Mobile Scroller (visible on small screens) */}
                <div className="lg:hidden mt-8 grid gap-4">
                    {sections.map((section, idx) => (
                        idx !== activeTab && (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className="w-full text-left p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 font-bold text-gray-900 dark:text-white flex justify-between items-center"
                            >
                                {section.title}
                                <span className="material-symbols-outlined text-gray-400">arrow_forward</span>
                            </button>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImplantPage;
