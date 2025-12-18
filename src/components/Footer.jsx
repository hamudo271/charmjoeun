import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
                {/* Brand Section */}
                <div className="col-span-1 lg:col-span-4">
                    <div className="flex flex-col gap-1 mb-6">
                        <span className="font-display font-bold text-2xl tracking-wide text-white">CHARMJOEUN</span>
                        <span className="text-xs tracking-[0.3em] text-gray-500 uppercase">Dental Clinic</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                        정확한 진단, 최소한의 치료.<br />
                        자연치아의 가치를 알고 있는 참조은치과입니다.
                    </p>
                    <div className="flex gap-4">
                        {['blog', 'chat'].map((icon) => (
                            <a key={icon} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-gray-400">
                                <span className="material-symbols-outlined text-sm">{icon === 'blog' ? 'rss_feed' : 'chat_bubble'}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Info Grid */}
                <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
                    {/* Hours */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-white text-base">진료 시간</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex justify-between max-w-[200px]"><span className="text-gray-500">월 · 금</span> <span>09:30 ~ 18:30</span></li>
                            <li className="flex justify-between max-w-[200px]"><span className="text-gray-500">화 · 목</span> <span>09:30 ~ 20:30 (야간)</span></li>
                            <li className="flex justify-between max-w-[200px]"><span className="text-gray-500">수요일</span> <span>휴진</span></li>
                            <li className="flex justify-between max-w-[200px]"><span className="text-gray-500">토 · 일</span> <span>09:30 ~ 14:00</span></li>
                            <li className="pt-2 text-xs text-gray-600 block">점심시간 13:00 ~ 14:00<br/>(토/일요일은 점심시간 없음)</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-white text-base">예약 및 문의</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 mb-1">대표전화</p>
                                <p className="text-2xl font-bold text-white tracking-widest">031-551-1875</p>
                            </div>
                            <div className="space-y-2">
                                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 네이버 예약 바로가기
                                </a>
                                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> 카카오톡 상담하기
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-white text-base">오시는 길</h3>
                        <address className="not-italic text-gray-400 space-y-2 leading-relaxed">
                            <p>경기도 구리시 경춘로 227번길 14</p>
                            <p>3층 (인창동)</p>
                            <p className="mt-4 text-xs text-gray-500">주차: 건물 내 또는 인근 공영주차장 이용</p>
                        </address>
                        <Link to="/location" className="inline-block mt-2 text-white border-b border-white pb-0.5 hover:text-primary hover:border-primary transition-colors">
                            지도 보기
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="border-t border-gray-800 pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider">
                    <div className="space-y-1">
                        <p>상호명: 참조은치과의원 | 대표자: 정채묵 | 사업자등록번호: 362-35-01383</p>
                        <p>주소: 경기도 구리시 경춘로 227번길 14, 3층 | TEL: 031-551-1875 | EMAIL: info@charmjoeun.com</p>
                    </div>
                    <p>© 2025 CHARMJOEUN DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
