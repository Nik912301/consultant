import './Head.css'
import HeaderMenu from './HeaderMenu'
import HeaderLogo from './HeaderLogo'

export default function Head(){
    return (
        <header id="header">
            <div class="header_content" id="header_content">
              <div class="container">

                <HeaderLogo />
                
                <HeaderMenu />

                <span class="menu-bars">
                  <span></span>
                </span>

              </div>
            </div>
        </header>

        /*<header id="header">
            <div class="header_content" id="header_content">
              <div class="container">
        
                <div class="header_logo">
                  <a href="/">
                    <img src="assets/images/demo/logo.png" alt="Отель" />
                  </a>
                </div>
        
                <nav class="header_menu">
                  <ul class="menu">
                    <li class="current-menu-item"><a href="https://doctor-franklin.ru/">Главная</a></li>
                    <li class=""><a href="/o-klinike-panchakarma-institute-dr.-franklin.html">О курорте <span class="fa fa-caret-down"></span></a>
                      <ul class="sub-menu">
                        <li class=""><a href="/o-klinike-panchakarma-institute-dr.-franklin/novosti-i-stati.html">Новости и статьи</a></li>
                        <li class=""><a href="/o-klinike-panchakarma-institute-dr.-franklin/sotrudnichestvo.html">Сотрудничество</a></li>
                        <li class="" last=""><a href="/o-klinike-panchakarma-institute-dr.-franklin/otzyvy.html">Отзывы</a></li>
                      </ul>
                    </li>
                    <li class=""><a href="/ayurvedicheskie-programmy.html">Программы</a></li>
                    <li class=""><a href="/nomera-v-panchakarma-institute-dr.-franklin.html">Номера</a></li>
                    <li class=""><a href="/ayurvedicheskie-procedury.html">Процедуры</a></li>
                    <li class=""><a href="/razvlecheniya.html">Развлечения <span class="fa fa-caret-down"></span></a>
                      <ul class="sub-menu">
                        <li class=" class=" last=""><a href="/razvlecheniya/ekskursii.html">Экскурсии</a></li>
                      </ul>
                    </li>
                    <li class=""><a href="/prajs.html">Прайс</a></li>
                    <li class=""><a href="/galereya.html">Галерея</a></li>
                    <li class=" class=" last=""><a href="/kontakty.html">Контакты</a></li>
                  </ul>
                </nav>
                <span class="menu-bars">
                  <span></span>
                </span>
              </div>
            </div>
        </header>*/
    )
}