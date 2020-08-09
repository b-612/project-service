import validate from "jquery-validation";

var inputValidation = {
	onInputValidate: ($form, $submitBtn) => {
		$form.validate();
		if ($form.valid()) {
			$submitBtn.attr('disabled', false);
		}
	},

	init: () => {
		const $form = $('form');
		const $input = $form.find('input, textarea');
		const $submit = $form.find('.feedback__submit');

		$input.on('input', function () {
			inputValidation.onInputValidate($form, $submit);
		});
	}
};

export { inputValidation }
