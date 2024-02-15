export const dataMenu1 = [
    {
        img:'',
        imgHref:'',
        text:'Panchakarma Hut (Non AC)',
        textHref:'',
        price:'от €93',
        forHow:'/сутки'
    },
    {
        img:'',
        imgHref:'',
        text:'Standard (Non AC)',
        textHref:'',
        price:'от €98',
        forHow:'/сутки'
    },
    {
        img:'',
        imgHref:'',
        text:'Deluxe Room (Non AC)',
        textHref:'',
        price:'от €103',
        forHow:'/сутки'
    },
    {
        img:'',
        imgHref:'',
        text:'Deluxe Room AC',
        textHref:'',
        price:'от €111',
        forHow:'/сутки'
    },
]

export const dataMenu2 = [
    {
        img:'',
        imgHref:'',
        text:'Лечение псориаза',
        textHref:'',
        price:'от €651',
        forHow:''
    },
    {
        img:'',
        imgHref:'',
        text:'Лечение позвоночника',
        textHref:'',
        price:'от €651',
        forHow:''
    },
    {
        img:'',
        imgHref:'',
        text:'Программа очищения организма (Шодана Чикилса)',
        textHref:'',
        price:'от €651',
        forHow:''
    },
    {
        img:'',
        imgHref:'',
        text:'Программа похудения',
        textHref:'',
        price:'от €651',
        forHow:''
    },
    {
        img:'',
        imgHref:'',
        text:'Программа иммунизации тела и долголетия (Кайякалпа Чикилса)',
        textHref:'',
        price:'от €651',
        forHow:''
    },
    {
        img:'',
        imgHref:'',
        text:'Омолаживающая терапия (Расаяна Чикилса)',
        textHref:'',
        price:'от €651',
        forHow:''
    },
]

function createContent(item){
    return(
        <div className="restaurant_content tab_content active" id="simple_tabs-1-tab-1">
            <a href={item.imgHref}>
                <img src={item.img} alt={item.text} />
             </a>
            <div class="text">
                <h2><a href={item.textHref}>{item.text}</a></h2>
                <p className="price">
                    <span className="amout">{item.price}</span>{item.forHow}
                </p>
            </div>
            <div class="owl-controls clickable">
                <span className=""></span>
                <i className="lotus-icon-left-arrow"></i>
                <i className="lotus-icon-right-arrow"></i>
            </div>
            <a href="nomera-v-panchakarma-institute-dr.-franklin.html" className="awe-btn awe-btn-default">Все номера</a>
        </div>
    )
}

export const buttons = {
    but2:dataMenu1.map(item =>(createContent(item))),
    but1:dataMenu2.map(item =>(createContent(item))),
}
