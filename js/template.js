for (const template of document.getElementsByTagName('template')) {
    fetch(template.getAttribute('src'))
        .then(file => file.text())
        .then(content => {
            const html = document.createElement('html')
            html.innerHTML = content
            document.head.innerHTML += html.getElementsByTagName('head')[0].innerHTML
            template.insertAdjacentHTML('afterend', html.getElementsByTagName('body')[0].innerHTML)
            template.remove();
        });
}
