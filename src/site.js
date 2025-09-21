/*
    Shared code
*/
function Toggle(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        }
        else {
            element.classList.add('hidden');
        }
    }
}

/*
    Reuable components
*/
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .page-footer {
                    display: flex;
                    justify-content: center;
                    border-top: 1px solid light-dark(var(--fg-light), var(--fg-dark));
                }
            </style>
            <footer class="page-footer">
                <div class="mt-2">
                    This site was inspired by
                    <a href="https://blog.avas.space" title="Go to Ava's site" aria-label="Go to Ava's site">Ava's,</a>
                    <a href="https://rwblickhan.org/" title="Go to Russell's site" aria-label="Go to Russell's site">Russell's,</a>
                    and
                    <a href="https://shilin.ca" title="Go to Shilin's site" aria-label="Go to Shilin's site">Shilin's</a>
                    sites.
                </div>
            </footer>`;
    }
}

customElements.define('footer-component', Footer);

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .page-header {
                    display: flex;
                    justify-content: center;
                    border-bottom: 1px solid light-dark(var(--fg-light), var(--fg-dark));
                }
            </style>
            <header class="page-header">
                <h3>My Digital Garden</h3>
            </header>`;
    }
}

customElements.define('header-component', Header);

class RedFlag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var item = this.attributes.getNamedItem('href');
        var link = null != item && item.value.length
                       ? item.value
                       : 'https://www.merriam-webster.com/dictionary/red-flag';

        this.innerHTML = `
            <style>
                .red-flag {
                    color: #d14338;
                    text-decoration: none;
                }
            </style>
            <a title="Red Flag" aria-label="Red Flag" class="red-flag" href="` + link + `">` +
                this.innerHTML + `&#9873;
            </a>`;
    }
}

customElements.define('red-flag', RedFlag);