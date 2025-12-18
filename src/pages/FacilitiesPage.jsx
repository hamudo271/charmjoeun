const FacilitiesPage = () => {
    return (
        <div className="pt-20 min-h-screen bg-white dark:bg-background-dark">
            <div className="bg-surface-light dark:bg-gray-900 py-20 px-6 text-center">
                <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Environment</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">시설 및 장비</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    대학병원급 첨단 장비와 쾌적한 진료 환경으로<br/>
                    더욱 편안하고 정확한 진료를 제공합니다.
                </p>
            </div>

            {/* Equipment Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">첨단 진료 장비</h2>
                    <div className="h-1 w-20 bg-primary"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "3D CT", desc: "정밀 진단을 위한 저선량 3차원 CT", img: "https://images.unsplash.com/photo-1516549655169-df83a253836f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
                        { name: "Ostem T2 Plus", desc: "강력하고 안정적인 임플란트 엔진", img: "https://images.unsplash.com/photo-1588776813186-600f95843632?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
                        { name: "Kavo NSK 마취기", desc: "통증을 최소화하는 무통 마취 시스템", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3" },
                        { name: "Dentis 초음파 치근세정기", desc: "효과적인 치주 치료를 위한 장비", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
                        { name: "ENDOSONIC Blue", desc: "정밀 근관 치료를 위한 엔도소닉", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3" },
                        { name: "HS-3041SD / SD 100H", desc: "고압증기 멸균기 및 초음파 세척기", img: "https://images.unsplash.com/photo-1584036561566-b4321f65bfb9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" },
                        { name: "큐레이펜 씨", desc: "육안으로 보기 힘든 치아우식 정밀 검사", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" }
                    ].map((item, i) => (
                        <div key={i} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="h-48 overflow-hidden bg-gray-100">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interior Section */}
            <section className="py-24 bg-surface-light dark:bg-gray-800">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                     <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">병원 내부 시설</h2>
                        <div className="h-1 w-20 bg-primary"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group">
                             <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053&ixlib=rb-4.0.3" alt="Lobby" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                                 <h3 className="text-2xl font-bold text-white">대기 공간</h3>
                                 <p className="text-white/80">편안하게 진료를 대기하실 수 있는 넓은 라운지</p>
                             </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <img src="https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3" alt="Exam Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                    <h3 className="text-lg font-bold text-white">진료실</h3>
                                </div>
                             </div>
                             <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3" alt="Surgery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                    <h3 className="text-lg font-bold text-white">수술실</h3>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FacilitiesPage;
