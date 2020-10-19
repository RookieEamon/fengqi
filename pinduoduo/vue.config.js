module.exports={
    //关闭esLint语法检查
    lintOnSave:false,
    // 配置代理
    devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}