var fs = require('fs')

var lerDiretorio = function() {
    fs.readdir(__dirname, function(err, diretorio) {
        if (err) return err

        diretorio.forEach(function(arquivo) {
            ler(arquivo)
        })
    })
}

var ler = function (arquivo) {
    var path = './' + arquivo

    fs.stat(path, function(err, stat) {
        if(err) return err

        if(stat.isFile()) {
            console.log('%s  %d bytes', arquivo, stat.size)
        }
    })
}

lerDiretorio()