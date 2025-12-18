import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="fade-in-up">
            {/* 5.1 Hero Section */}
            <div className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img 
                        alt="Charmjoeun Dental Clinic Lobby" 
                        className="w-full h-full object-cover opacity-60" 
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-[1440px] px-6 lg:px-12 w-full flex flex-col justify-center h-full pt-20">
                    <div className="max-w-3xl animate-fade-in-up">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-medium tracking-wider mb-6">
                            CHARMJOEUN DENTAL CLINIC
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-white">
                            자연치아의 가치를<br />
                            <span className="text-primary italic">알고 있는 치과</span>
                        </h1>
                        <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-xl">
                            정확한 진단과 최소한의 치료.<br />
                            참조은치과가 당신의 평생 주치의가 되겠습니다.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/doctors" className="bg-primary text-white border border-primary px-10 py-4 rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-blue-900/50 font-bold text-lg text-center">
                                의료진 소개
                            </Link>
                            <Link to="/location" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all font-medium text-lg text-center">
                                오시는 길
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
                    <span className="text-xs tracking-widest uppercase">Scroll Down</span>
                    <span className="material-symbols-outlined">expand_more</span>
                </div>
            </div>

            {/* Quick Links Integration */}
            <div className="relative z-20 -mt-20 max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden divide-x divide-gray-100 dark:divide-gray-700">
                    {[
                        { icon: 'calendar_month', title: '온라인 예약', desc: '간편한 예약 시스템', link: '#' },
                        { icon: 'chat_bubble', title: '카카오톡 상담', desc: '빠르고 친절한 답변', link: '#' },
                        { icon: 'location_on', title: '오시는 길', desc: '구리시 경춘로', link: '/location' },
                        { icon: 'smart_display', title: '유튜브 채널', desc: '치과 건강 상식', link: '#' }
                    ].map((item, idx) => (
                        <Link to={item.link} key={idx} className="group p-8 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex flex-col items-center text-center md:items-start md:text-left gap-4">
                            <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">{item.icon}</span>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* 5.2 Strengths Section */}
            <section className="py-24 bg-white dark:bg-background-dark">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Specialty</span>
                        <h2 className="text-4xl font-bold mt-3 mb-6 font-display text-gray-900 dark:text-white">Why Charmjoeun?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">참조은치과 의료진만의 특별함</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "서울대 출신 전문의", desc: "보건복지부 인증 통합치의학과 전문의 진료", icon: "school" },
                            { title: "다수 식립 경력", desc: "풍부한 임상 경험을 바탕으로 한 안전한 수술", icon: "history_edu" },
                            { title: "디테일한 맞춤 진료", desc: "환자 개개인의 특성을 고려한 1:1 맞춤 계획", icon: "person_search" },
                            { title: "독보적 임상 결과", desc: "높은 수술 성공률과 환자 만족도 증명", icon: "thumb_up_alt" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-surface-light dark:bg-gray-800 hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5.3 Philosophy Section */}
            <section className="py-24 bg-surface-light dark:bg-gray-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-200 dark:bg-gray-800 skew-x-12 translate-x-1/2 z-0"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 text-gray-900 dark:text-white">
                                정확한 진단,<br/>
                                <span className="text-primary">최소한의 치료</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                                <p>
                                    <strong className="text-gray-900 dark:text-white font-bold">대표원장이 처음부터 끝까지 직접 보고,</strong><br/>
                                    작은 문제도 놓치지 않는 정밀한 진료를 약속드립니다.
                                </p>
                                <p>
                                    꼭 필요한 치료만을 권하며, 환자분의 자연치아가<br/>
                                    가장 좋은 임플란트라는 믿음으로 치아 보존에 힘씁니다.
                                </p>
                            </div>
                            <div className="mt-10">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Signature_sample.svg" alt="Signature" className="h-12 opacity-50 mb-2" />
                                <p className="font-display font-bold text-xl text-gray-900 dark:text-white">대표원장 정 채 묵</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3" 
                                    alt="Doctor Consultation" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-8 rounded-tr-3xl shadow-xl max-w-xs hidden md:block">
                                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5.4 Four Principles (Promises) */}
            <section className="py-24 bg-white dark:bg-background-dark">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                     <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Promises</span>
                            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">참조은치과 4가지 원칙</h2>
                        </div>
                        <p className="text-gray-500 max-w-md text-right md:text-left">
                            환자분들이 믿고 맡길 수 있는 치과가 되기 위해<br/>
                            우리는 이 네 가지 원칙을 반드시 지킵니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "멸균 소독 시스템", icon: "cleaning_services", desc: "1인 1기구 원칙 및 철저한 감염 관리" },
                            { title: "자연치아의 가치", icon: "volunteer_activism", desc: "무분별한 발치를 지양하고 보존 최우선" },
                            { title: "통증 최소화 마취", icon: "healing", desc: "단계별 마취 시스템으로 아픔 없는 진료" },
                            { title: "임플란트 보증서", icon: "verified", desc: "시술 후 책임지는 철저한 사후 관리" }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                {/* Placeholder bg image for cards */}
                                <img 
                                    src={`https://source.unsplash.com/random/400x500?dental,${idx}`} 
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                    <span className="material-symbols-outlined text-white text-4xl mb-4 block group-hover:-translate-y-2 transition-transform duration-300">{item.icon}</span>
                                    <h3 className="text-xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-2 group-hover:translate-y-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
