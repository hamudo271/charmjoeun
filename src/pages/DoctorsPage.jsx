import { useRef } from 'react';

const DoctorsPage = () => {
    return (
        <div className="pt-20 min-h-screen bg-white dark:bg-background-dark">
            {/* Header */}
            <div className="bg-surface-light dark:bg-gray-900 py-20 px-6 text-center">
                <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Doctor's Team</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">의료진 소개</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    참조은치과의 의료진은 끊임없는 연구와 노력으로<br/> 
                    가장 이상적이고 정직한 진료를 약속드립니다.
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 space-y-32">
                {/* Dr. Jung */}
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 relative group">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3" 
                                alt="Dr. Jung Chae-mook" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg lg:hidden">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">정채묵 대표원장</h2>
                            <p className="text-primary font-medium">Integrated Dentistry Specialist</p>
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3 flex flex-col justify-center">
                        <div className="mb-4">
                            <span className="text-primary font-bold tracking-tight uppercase text-sm mb-1 block">Representative Director</span>
                            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">정 채 묵 <span className="text-2xl text-gray-400 font-normal">대표원장</span></h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400">보건복지부 인증 통합치의학과 전문의</p>
                        </div>

                        <hr className="border-gray-100 dark:border-gray-800 my-8 w-24 border-t-2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-600 dark:text-gray-300">
                            {[
                                "서울대학교 치과대학, 치의학대학원 졸업",
                                "보건복지부 인증 통합치의학과 전문의",
                                "대한통합치과학회 정회원",
                                "지역발전 유공자 표창 수여",
                                "국민건강영양조사 구강검진 전문조사원",
                                "오스템, 덴티스 임플란트 자문위원",
                                "Implant MASTER Course (Osstem AIC Implant) 수료",
                                "ALL IN ONE HANDS-on Course 수료",
                                "ALL+ GBR&SINUS / PROSTHODONTICS Course 수료",
                                "ALL+ COMPLICATION Course 수료",
                                "아시아 턱관절 포럼 연수"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start group/item">
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 group-hover/item:bg-primary transition-colors"></span>
                                    <span className="leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dr. Choi */}
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
                    <div className="lg:w-1/3 relative group">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3" 
                                alt="Dr. Choi In-young" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg lg:hidden">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">최인영 원장</h2>
                            <p className="text-primary font-medium">Dentist</p>
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3 flex flex-col justify-center lg:text-right text-left">
                        <div className="mb-4 lg:self-end">
                            <span className="text-primary font-bold tracking-tight uppercase text-sm mb-1 block">Dentist</span>
                            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">최 인 영 <span className="text-2xl text-gray-400 font-normal">원장</span></h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400">서울대학교 치의학석사</p>
                        </div>

                        <hr className="border-gray-100 dark:border-gray-800 my-8 w-24 border-t-2 lg:self-end" />

                        <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300 lg:items-end">
                            {[
                                "서울대학교 치과대학, 치의학대학원 졸업",
                                "서울대학교 졸업 / 서울대학교 치의학석사",
                                "서울대학교 치과병원 종합진료센터 근무",
                                "서울아산병원 익스턴쉽 수료",
                                "서울대학교 치과병원 치과의사 전공의 수료"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start flex-row-reverse lg:flex-row group/item ">
                                    <span className="leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors text-right">{item}</span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 group-hover/item:bg-primary transition-colors hidden lg:block"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 group-hover/item:bg-primary transition-colors lg:hidden"></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;
