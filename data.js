const surveyData = [{
	number: 1,
	title: 'перше питання',
	answer_alias: 'category',
	answers: [{
				answer_title: 'перша відповідь',
				type: 'radio',
			},
			{
				answer_title: 'друга відповідь',
				type: 'radio',
			},
			{
				answer_title: 'третя відповідь',
				type: 'radio',
			},
			{
				answer_title: '',
				type: 'text',
			}
		]
	},
	{
	number: 2,
	title: 'друге питання',
	answer_alias: 'time',
	answers: [{
				answer_title: 'перша відповідь',
				type: 'radio',
			},
			{
				answer_title: 'друга відповідь',
				type: 'radio',
			},
			{
				answer_title: 'третя відповідь',
				type: 'radio',
			},
			{
				answer_title: '',
				type: 'text',
			}
		]
	},
	{
	number: 3,
	title: 'третє питання',
	answer_alias: 'gear',
	answers: [{
				answer_title: 'перша відповідь',
				type: 'radio',
			},
			{
				answer_title: 'друга відповідь',
				type: 'radio',
			},
			{
				answer_title: 'третя відповідь',
				type: 'radio',
			},
			{
				answer_title: '',
				type: 'text',
			}
		]
	},
	{
	number: 4,
	title: 'залиште номер телефону',
	answer_alias: 'phone',
	answers: [{
				answer_title: '',
				type: 'tel',
			}
		]
	},
]
// для роботи this.tmp() треба вказати answer_alias для кожного питання! (воно виступає у якості атрибута name)