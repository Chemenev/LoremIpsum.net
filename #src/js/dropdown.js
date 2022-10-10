document.querySelectorAll('.dropdown').forEach(function (dropdownWraper) {
	const dropdownBtn = dropdownWraper.querySelector('.dropdown__button');
	const dropdownList = dropdownWraper.querySelector('.dropdown__list');
	const dropdownListItems = dropdownList.querySelectorAll(
		'.dropdown__list-item'
	);
	const dropdownInput = dropdownWraper.querySelector('.dropdown__input-hidden');

	//клик по кнопке. Toggle select
	dropdownBtn.addEventListener('click', function () {
		dropdownList.classList.toggle('dropdown__list--visible');
		this.classList.add('dropdown__button--active');
	});

	//Выбор элемента списка. Запомнить знач. Закрыть дропдаун
	dropdownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropdownBtn.innerText = this.innerText;
			dropdownInput.value = this.dataset.value;
			removeActiveClass();
		});
	});

	//Клик снаружи
	document.addEventListener('click', function (e) {
		if (e.target !== dropdownBtn) {
			removeActiveClass();
		}
	});

	//Нажатие Esc
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			removeActiveClass();
		}
	});

	function removeActiveClass() {
		dropdownBtn.classList.remove('dropdown__button--active');
		dropdownList.classList.remove('dropdown__list--visible');
	}
});