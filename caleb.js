const $caleb = {
    dom: null,
    quotes: [],
    quotesLen: 0,
    timer: null,
    error: {
        queryMissing: 'you need to call $caleb.querySelector() first',
        dom: 'you need to pass a valid DOM element to $caleb.querySelector()'
    },
    init(quotes, fn) {
        if (!quotes || !Array.isArray(quotes)) {
            throw new Error('you need to pass an array of quotes to $caleb.init() :D');
        }
        this.quotes = quotes;
        this.quotesLen = quotes.length;
        document.addEventListener('DOMContentLoaded', fn);
    },
    querySelector: function (selector) {
        this.dom = document.querySelector(selector);
        if (!this.dom) {
            throw new Error(this.error.dom);
        }
        return this;
    },
    text: function (text) {
        if (!this.dom) {
            throw this.error.queryMissing;
        }
        this.dom.innerText = text;
        return this;
    },
    style: function (style) {
        if (!this.dom) {
            throw this.error.queryMissing;
        }
        this.dom.style = style;
        return this;
    },
    setQuotes: function () {
        const quote = this.quotes[Math.floor(Math.random() * this.quotesLen)];
        if (!this.dom) {
            throw this.error.queryMissing;
        }
        this.text(quote).fadeIn(1);
        return this;
    },
    fadeIn: function (time) {
        if (!this.dom) {
            throw this.error.queryMissing;
        }
        this.dom.style.transition = `opacity ${time}s`;
        this.dom.style.opacity = 1;
        return this;
    },
    changeQuote: function (time) {
        if (!this.dom) {
            throw this.error.queryMissing;
        }
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setQuotes();
            this.changeQuote(time + 5);
        }, time * 1000);
        return this;
    }
};

export default $caleb;

