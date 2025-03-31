export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">
          صفحة اختبار بسيطة
        </h1>
        <p className="text-gray-200 text-center mb-6">
          هذه صفحة بسيطة لاختبار التصميم والألوان
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-all duration-300">
          زر تجريبي
        </button>
      </div>
    </main>
  )
}
