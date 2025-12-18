import { Link } from 'react-router-dom';

const OrthodonticsPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-surface-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Orthodontics Center</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">치아교정 클리닉</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        가지런한 치아, 자신감 있는 미소.<br/>
                        참조은치과의 정밀 교정 진단을 통해 가장 알맞은 치료 계획을 제안합니다.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-12 text-center">
                    <span className="material-symbols-outlined text-gray-300 text-6xl mb-4">construction</span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">페이지 준비중입니다</h2>
                    <p className="text-gray-500 mb-8">보다 알찬 내용으로 찾아뵙겠습니다.</p>
                    <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition">
                        홈으로 돌아가기
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrthodonticsPage;
