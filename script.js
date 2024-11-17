document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const asideLinks = document.querySelectorAll('.aside-link');
    const bodyContent = document.getElementById('body-content');

    // Function to clear active classes
    function clearActiveClasses(links) {
        links.forEach(link => link.classList.remove('active'));
    }

    // Function to handle nav link click
    function handleNavClick(event) {
        event.preventDefault();
        clearActiveClasses(navLinks);
        this.classList.add('active');

        // Update main section based on clicked nav link
        switch (this.id) {
            case 'nav-home':
                document.querySelector('aside').style.display = 'block';
                bodyContent.innerHTML = '<h2>Новости</h2>';
                break;
            case 'nav-history':
                document.querySelector('aside').style.display = 'none';
                bodyContent.innerHTML = `
                    <h2>История предприятия</h2>
                    <p>Лесоустройство в Казахстане прошло долгий путь развития, начавшись еще в конце XIX века, когда на территории страны начали проводиться первые исследования природных условий и инвентаризация лесных ресурсов. Первым нормативным актом, регулирующим лесное хозяйство, стали «Правила о лесах Семиреченской области» 1870 года, которые положили начало топографическим съемкам, хозяйственным описаниям и таксации лесов.</p>
                    <p>Серьезное развитие лесоустройства началось в XX веке с созданием Казахской проектно-изыскательской конторы «Казлеспроект» в 1947 году, переименованной позже в Казахскую аэрофотолесоустроительную контору. В годы советской власти предприятие сыграло ключевую роль в организации лесного хозяйства республики, особенно в периоды бурного развития лесной промышленности в 1960-1980-е годы. Становление рыночных отношений в 1990-е годы внесло свои коррективы, но предприятию удалось сохранить ключевые кадры и продолжить выполнение своих функций.</p>
                    <p>На сегодняшний день лесоустроительное предприятие продолжает выполнять важную роль в организации рационального использования и охраны лесных ресурсов, внедряя современные технологии и методы работы.</p>
                `;
                break;
            case 'nav-documents':
                document.querySelector('aside').style.display = 'none';
                bodyContent.innerHTML = '';
                break;
            case 'nav-contacts':
                document.querySelector('aside').style.display = 'none';
                bodyContent.innerHTML = `
                    <section class="contacts">
                        <h2>Контакты</h2>
                        <p>Адрес: город Алматы, улица Баишева 23</p>
                        <p>Email: l_kforest@mail.ru</p>
                        <p>Телефон: (8-727) 397-41-32; 397-41-30</p>
                        <p>Факс: (8-727) 397-41-31</p>
                    </section>
                    <section class="map">
                        <h2>Карта</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.019401041158!2d76.959129!3d43.268162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE2JzA1LjQiTiA3NsKwNTcnMzYuNCJF!5e0!3m2!1sen!2skz!4v1633021234567!5m2!1sen!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </section>
                `;
                break;
        }
    }

    // Function to handle aside link click
    function handleAsideClick(event) {
        event.preventDefault();
        clearActiveClasses(asideLinks);
        this.classList.add('active');

        // Update body content based on clicked aside link
        switch (this.id) {
            case 'aside-news':
                bodyContent.innerHTML = '<h2>Новости</h2>';
                break;
            case 'aside-activity':
                bodyContent.innerHTML = `
                    <h2>Направление деятельности</h2>
                    <p>Главным направлением деятельности предприятия является проведение лесоустроительных работ на территории государственного лесного фонда Республики Казахстан. Это включает подготовительные, полевые и камеральные работы, которые проводятся в строгом соответствии с нормативной базой и современными технологическими стандартами.</p>
                    <p>К основным задачам относятся:</p>
                    <ul>
                        <li>Инвентаризация лесов и их учет.</li>
                        <li>Составление и обновление организационно-хозяйственных планов.</li>
                        <li>Разработка мероприятий по воспроизводству, охране и защите лесов.</li>
                        <li>Проведение аэрофотосъемки и космического мониторинга.</li>
                        <li>Внедрение и использование ГИС-технологий для создания лесных карт и обработки данных.</li>
                    </ul>
                    <p>Благодаря постоянному совершенствованию процессов, предприятие играет ключевую роль в обеспечении устойчивого лесопользования в республике.</p>
                `;
                break;
            case 'aside-useful-links':
                bodyContent.innerHTML = `
                    <h2>Полезные ссылки:</h2>
                    <p>Министерство экологии и природных ресурсов<br>
                    <a href="https://gov.kz/memleket/entities/ecogeo">gov.kz›memleket/entities/ecogeo</a></p>
                    <p>Комитет лесного хозяйства и животного мира<br>
                    <a href="https://gov.kz/memleket/entities/forest?lang=ru">gov.kz›memleket/entities/forest?lang=ru</a></p>
                `;
                break;
            default:
                bodyContent.innerHTML = '';
                break;
        }
    }

    // Add event listeners to nav links
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));

    // Add event listeners to aside links
    asideLinks.forEach(link => link.addEventListener('click', handleAsideClick));
});