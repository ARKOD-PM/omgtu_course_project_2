document.addEventListener('DOMContentLoaded', function() {
    const glossaryData = [
        {
            term: "Восстановление данных",
            definition: "Процесс извлечения информации с поврежденных, недоступных или удаленных носителей информации.",
            category: "Восстановление",
            usage: "Используется при случайном удалении файлов или повреждении носителей",
            examples: ["Recuva", "R-Studio", "Hetman Partition Recovery"]
        },
        {
            term: "Жесткий диск",
            definition: "Устройство для постоянного хранения информации, основанное на принципе магнитной записи.",
            category: "Оборудование",
            usage: "Основное хранилище данных в компьютерах",
            examples: ["HDD", "SSD", "Гибридные диски"]
        },
        {
            term: "Файловая система",
            definition: "Порядок, определяющий способ организации, хранения и именования данных на носителях.",
            category: "Система",
            usage: "Определяет структуру хранения файлов",
            examples: ["NTFS", "FAT32", "exFAT", "ext4"]
        },
        {
            term: "Безвозвратное удаление",
            definition: "Процесс полного уничтожения данных без возможности их восстановления.",
            category: "Безопасность",
            usage: "Защита конфиденциальной информации",
            examples: ["Eraser", "File Shredder", "CCleaner"]
        },
        {
            term: "Сектор диска",
            definition: "Минимальная адресуемая единица хранения данных на жестком диске.",
            category: "Технические",
            usage: "Базовая единица хранения на HDD",
            examples: ["Размер обычно 512 байт или 4 КБ"]
        },
        {
            term: "RAID",
            definition: "Технология виртуализации данных, объединяющая несколько дисков в логический элемент.",
            category: "Технологии",
            usage: "Повышение надежности и производительности",
            examples: ["RAID 0", "RAID 1", "RAID 5"]
        },
        {
            term: "Бэкап",
            definition: "Процесс создания копии данных для их восстановления в случае утери.",
            category: "Резервное копирование",
            usage: "Защита от потери важной информации",
            examples: ["Acronis True Image", "Veeam", "Windows Backup"]
        },
        {
            term: "Кластер",
            definition: "Минимальная логическая единица размещения файла в файловой системе.",
            category: "Технические",
            usage: "Единица распределения места на диске",
            examples: ["Размер зависит от файловой системы"]
        },
        {
            term: "Дефрагментация",
            definition: "Процесс оптимизации расположения файлов на диске для ускорения доступа.",
            category: "Оптимизация",
            usage: "Улучшение производительности HDD",
            examples: ["Defraggler", "Встроенный дефрагментатор Windows"]
        },
        {
            term: "SSD",
            definition: "Твердотельный накопитель - устройство хранения данных на основе flash-памяти.",
            category: "Оборудование",
            usage: "Быстрое хранилище данных",
            examples: ["SATA SSD", "NVMe SSD", "M.2 накопители"]
        },
        {
            term: "Метка тома",
            definition: "Имя, присваиваемое разделу диска для удобства идентификации.",
            category: "Система",
            usage: "Именование разделов диска",
            examples: ["System (C:)", "Data (D:)"]
        },
        {
            term: "Партиция",
            definition: "Логический раздел на физическом диске, функционирующий как отдельный диск.",
            category: "Система",
            usage: "Разделение диска на логические части",
            examples: ["Основной раздел", "Расширенный раздел"]
        },
        {
            term: "Форматирование",
            definition: "Процесс создания структуры файловой системы на носителе информации.",
            category: "Система",
            usage: "Подготовка диска к использованию",
            examples: ["Быстрое форматирование", "Полное форматирование"]
        },
        {
            term: "Бад-блок",
            definition: "Поврежденный сектор на жестком диске, который не может быть использован для хранения данных.",
            category: "Технические",
            usage: "Обозначение поврежденных областей диска",
            examples: ["Программы для проверки: Victoria, HDDScan"]
        },
        {
            term: "S.M.A.R.T.",
            definition: "Технология мониторинга состояния жестких дисков и SSD.",
            category: "Технологии",
            usage: "Предсказание возможных отказов диска",
            examples: ["CrystalDiskInfo", "HDD Guardian"]
        }
    ];

    const glossaryList = document.getElementById('glossaryList');
    const searchInput = document.getElementById('searchInput');
    const alphabetFilter = document.getElementById('alphabetFilter');
    const noResults = document.getElementById('noResults');
    const totalTerms = document.getElementById('totalTerms');
    const shownTerms = document.getElementById('shownTerms');

    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => filterByLetter(letter));
        alphabetFilter.appendChild(button);
    });

    const allButton = document.createElement('button');
    allButton.textContent = 'Все';
    allButton.className = 'active';
    allButton.addEventListener('click', () => {
        document.querySelectorAll('.alphabet-filter button').forEach(btn => btn.classList.remove('active'));
        allButton.classList.add('active');
        renderGlossary(glossaryData);
    });
    alphabetFilter.appendChild(allButton);

    renderGlossary(glossaryData);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredData = glossaryData.filter(item => 
            item.term.toLowerCase().includes(searchTerm) ||
            item.definition.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
        renderGlossary(filteredData);
    });

    function renderGlossary(data) {
        glossaryList.innerHTML = '';
        totalTerms.textContent = glossaryData.length;
        shownTerms.textContent = data.length;

        if (data.length === 0) {
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';

        data.forEach(item => {
            const glossaryItem = document.createElement('div');
            glossaryItem.className = 'glossary-item';
            
            glossaryItem.innerHTML = `
                <div class="glossary-term">
                    <h3>${item.term}</h3>
                    <span class="glossary-category">${item.category}</span>
                </div>
                <p class="glossary-definition">${item.definition}</p>
                <div class="glossary-details">
                    <div class="detail-item"><strong>Использование:</strong> ${item.usage}</div>
                    <div class="detail-item"><strong>Примеры:</strong> ${item.examples.join(', ')}</div>
                </div>
            `;

            glossaryItem.addEventListener('click', function() {
                const details = this.querySelector('.glossary-details');
                details.classList.toggle('active');
            });

            glossaryList.appendChild(glossaryItem);
        });
    }

    function filterByLetter(letter) {
        document.querySelectorAll('.alphabet-filter button').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        const filteredData = glossaryData.filter(item => 
            item.term.toUpperCase().startsWith(letter)
        );
        renderGlossary(filteredData);
    }
});
