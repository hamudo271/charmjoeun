import { Link } from 'react-router-dom';

const IntroPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-background-dark">
            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <div className="text-center z-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        참조은치과 소개
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        정확한 진단과 정직한 진료로<br/>
                        여러분의 평생 치아 주치의가 되겠습니다.
                    </p>
                </div>
            </div>

            {/* Philosophy Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-wider mb-2 block">PHILOSOPHY</span>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                            자연치아의 가치를<br/>
                            가장 먼저 생각합니다
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                치아는 한번 손상되면 다시 재생되지 않습니다.
                                그렇기 때문에 저희 참조은치과는 무분별한 발치나 치료보다는,
                                환자분의 자연치아를 최대한 보존하는 것을 최우선 가치로 삼고 있습니다.
                            </p>
                            <p>
                                멸균 소독 시스템을 통한 안전한 진료 환경,
                                그리고 끊임없는 연구와 노력을 통해
                                환자분들께 최상의 진료 서비스를 제공할 것을 약속드립니다.
                            </p>
                        </div>
                    </div>
                     <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
                        {/* Placeholder for clinic interior or doctor interaction */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                             <span className="material-symbols-outlined text-6xl">medical_services</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntroPage;
