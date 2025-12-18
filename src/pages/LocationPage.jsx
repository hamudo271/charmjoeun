const LocationPage = () => {
    return (
        <div className="pt-20 min-h-screen bg-white dark:bg-background-dark">
             <div className="bg-surface-light dark:bg-gray-900 py-20 px-6 text-center">
                <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Contact Us</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">오시는 길</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    참조은치과로 오시는 편리한 길을 안내해드립니다.
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-auto lg:h-[600px]">
                    {/* Map Placeholder */}
                    <div className="w-full h-[400px] lg:h-full bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.264273030303!2d127.1365693153103!3d37.59594197979265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb07c9b0e2b9d%3A0x6c6e76100230230!2z44K_44Ov44O8!5e0!3m2!1sko!2skr!4v1629876543210!5m2!1sko!2skr" 
                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow text-sm font-bold text-gray-800">
                            참조은치과의원
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center space-y-10 py-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">주소</h3>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 pl-14">
                                경기도 구리시 경춘로 227번길 14, 3층<br/>
                                (인창동)
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">directions_car</span>
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">주차 안내</h3>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 pl-14">
                                <strong className="text-gray-900 dark:text-white block mb-1">건물 내 주차 가능</strong>
                                만차 시 인근 공영 주차장을 이용해주시면 주차권을 지원해드립니다.
                            </p>
                        </div>

                         <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">map</span>
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">지도 앱으로 보기</h3>
                            </div>
                            <div className="flex gap-4 pl-14 flex-wrap">
                                <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-[#FAE100] hover:bg-[#F9D500] text-[#3C1E1E] rounded-lg font-bold transition text-sm">
                                    카카오맵
                                </a>
                                <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-[#03C75A] hover:bg-[#02B150] text-white rounded-lg font-bold transition text-sm">
                                    네이버 지도
                                </a>
                                <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-bold transition text-sm">
                                    티맵
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
