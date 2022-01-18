var template = document.createElement('template'); 
template.innerHTML = `
<style>
        body {width: 100vw; 
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sfrm=jpg);
            background-repeat: no-repeat;
            background-size: 30%;
            background-position: center;
        }
    </style>
</head>
<body>
    <style>
        #counter {
            display: flex;
            padding: 10px;
            background-color: #dad;
        }

        #counter > button { 
            background: #bed;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            font-size: 24px;
        }
        #counter > div { 
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
        }
        #bar { 
            width: 0px;
            height: 10px;
            background-color: #dad;
            transition: width 0.2s;
        }
    </style>
    <div id="counter">
        <button id='d_but'>-</button>
        <div>1</div>
        <button id='i_but>+</button>
    </div>
    <div id="bar"></div>
`;

class TheCounter extends HTMLElement { 
    constructor (){
        super();
        this.num = 1;
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("#d_but").onclick = this.dec;
        this.shadowRoot.getElementById("i_but").onclick = this.inc; 
    }
}

    dec(){
        this.num = this.num-1;
        this.shadowRoot.getElementById("#c_num").innerText = this.num;
    }

    inc(){
        this.num = this.num+1;
    }
customElements.getElementById("the-c_num", TheCounter);