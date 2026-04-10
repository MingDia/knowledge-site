export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">欢迎来到我的知识网站</h1>
      <p className="text-lg text-gray-600 mb-8">
        这是我的第二大脑的公开投影，分享学习笔记、工作方法和思考。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">📚 知识库</h2>
          <p className="text-gray-600">探索我的知识笔记和方法论</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">✍️ 文章</h2>
          <p className="text-gray-600">阅读我的深度思考和总结</p>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">🚀 项目</h2>
          <p className="text-gray-600">查看我正在做的项目</p>
        </div>
      </div>
    </div>
  )
}
