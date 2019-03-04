function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: (scope, elem, attrs) => {
			console.log(scope, elem, attrs)
		},
		compile: (elem, attrs) => {
			return {
				pre: (scope, elem, attrs) => {
					elem[0].innerText = 'Something else!'
				},
				post: (scope, elem, attrs) => {
					elem[0].addEventListener('click', () => console.log('Something else clicked!'))
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
