// 导航菜单活跃状态切换
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航菜单项
    const navItems = document.querySelectorAll('.nav-menu li');
    
    // 确保第一个菜单项（开发与部署）默认选中
    if (navItems.length > 0) {
        navItems.forEach(i => i.classList.remove('active'));
        navItems[0].classList.add('active');
        
        // 滚动到开发与部署部分
        const devDeploySection = document.getElementById('dev-deploy');
        if (devDeploySection) {
            devDeploySection.scrollIntoView();
        }
    }
    
    // 为每个菜单项添加点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有的active类
            navItems.forEach(i => i.classList.remove('active'));
            // 给当前点击的项添加active类
            this.classList.add('active');
        });
    });

    // 滚动监听
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.category-section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.querySelector('a').getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const allCards = document.querySelectorAll('.card');
            
            allCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}); 