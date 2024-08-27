

export const flockOptions = [
    {
        key: '0',
        value: 'addreduce',
        label: 'Add/Reduce Birds',
    },
    {
        key: '1',
        value: 'eggcollection',
        label: 'Egg Collection',
    },
    {
        key: '2',
        value: 'feeding',
        label: 'Daily Feeding',
    },
    {
        key: '3',
        value: 'health',
        label: 'Birds Health',
    },
    {
        key: '4',
        value: 'incomeexpense',
        label: 'Income/Expense',
    },

];


export const addreduceFormItems = (type: any) => [
    {
        type: 'inputNumber',
        name: 'birdCount',
        label: 'Birds Count',
        placeholder: 'Enter birds count',
        rules: [{ required: true, message: 'Please input the birds count!' }],
    },
    {
        type: 'select',
        name: 'acquisitionOrReduction',
        label: type === 'add' ? 'Acquisition' : 'Reduction Reason',
        placeholder: type === 'add' ? 'Select acquisition method' : 'Select reduction method',
        rules: [{ required: true, message: type === 'add' ? 'Please select an acquisition method!' : 'Please select a reduction method!' }],
        options: type === 'add'
            ? [
                { value: 'Purchased', label: 'Purchased' },
                { value: 'Hatched on Farm', label: 'Hatched on Farm' },
                { value: 'Gift', label: 'Gift' },
                { value: 'Other', label: 'Other' },
            ]
            : [
                { value: 'sold', label: 'Sold' },
                { value: 'personal_use', label: 'Personal Use' },
                { value: 'mortality', label: 'Mortality' },
                { value: 'lose/stolen', label: 'Lose/Stolen' },
                { value: 'Other', label: 'Other' },
            ],
    },
    {
        type: 'datePicker',
        name: 'date',
        label: 'Date',
        rules: [{ required: true, message: 'Please select the date!' }],
        className: 'w-full',
    },
    {
        type: 'textArea',
        name: 'description',
        label: 'Description',
        placeholder: 'Enter description',
        rules: [{ required: false, message: 'Please enter a description!' }],
        rows: 4,
    },
    {
        type: 'button',
        name: 'submit',
        label: '',
        buttonType: 'primary',
        htmlType: 'submit',
        text: 'Confirm',
        className: 'flex justify-end',
    }
];

export const eggcollectionFormItems = (type: any) => [
    {
        type: 'inputNumber',
        name: 'goodEggs',
        label: 'Good Eggs',
        placeholder: 'Enter the number of good eggs',
        rules: [{ required: true, message: 'Please input the number of good eggs!' }],
    },
    {
        type: 'inputNumber',
        name: 'badEggs',
        label: 'Bad Eggs',
        placeholder: 'Enter the number of bad eggs',
        rules: [{ required: true, message: 'Please input the number of bad eggs!' }],
    },
    {
        type: 'inputNumber',
        name: 'totalEggs',
        label: 'Total Eggs',
        placeholder: 'Enter the total number of eggs',
        rules: [{ required: true, message: 'Please input the total number of eggs!' }],
    },
    type !== 'collect' && {
        type: 'select',
        name: 'reduction',
        label: 'Reduction Reason',
        placeholder: 'Select reduction method',
        rules: [{ required: true, message: 'Please select a reduction method!' }],
        options: [
            { value: 'sold', label: 'Sold' },
            { value: 'personal_use', label: 'Personal Use' },
            { value: 'mortality', label: 'Mortality' },
            { value: 'lose/stolen', label: 'Lose/Stolen' },
            { value: 'Other', label: 'Other' },
        ],
    },
    {
        type: 'datePicker',
        name: 'date',
        label: 'Date',
        placeholder: 'Select date',
        rules: [{ required: true, message: 'Please select the date!' }],
    },
    {
        type: 'textArea',
        name: 'description',
        label: 'Description',
        placeholder: 'Enter description',
        rules: [{ required: false, message: 'Please input a description!' }],
        rows: 4,
    },
    {
        type: 'button',
        name: 'submit',
        label: '',
        buttonType: 'primary',
        htmlType: 'submit',
        text: 'Confirm',
        className: 'flex justify-end',
    },
];


export const feedingFormItems = [
    {
        type: 'select',
        name: 'feedType',
        label: 'Choose Feed',
        placeholder: 'Select feed type',
        rules: [{ required: true, message: 'Please select a feed type!' }],
        options: [
            { value: 'growersMash', label: 'Growers Mash' },
            { value: 'layersMash', label: 'Layers Mash' },
            { value: 'chickDuckMash', label: 'Chick and Duck Mash' },
            { value: 'pellets', label: 'Pellets' },
            { value: 'shellGrit', label: 'Shell Grit' },
            { value: 'chickenScratch', label: 'Chicken Scratch' },
            { value: 'wheat', label: 'Wheat' },
            { value: 'barley', label: 'Barley' },
            { value: 'oats', label: 'Oats' },
            { value: 'mixSeeds', label: 'Mix Seeds' },
            { value: 'bajraMillat', label: 'Bajra/Millat' },
            { value: 'corn', label: 'Corn' },
        ],
    },
    {
        type: 'inputNumber',
        name: 'feedQuantity',
        label: 'Feed Quantity (kg)',
        placeholder: 'Enter quantity',
        rules: [{ required: true, message: 'Please enter the feed quantity!' }],

    },
    {
        type: 'datePicker',
        name: 'date',
        label: 'Date',
        placeholder: 'Select date',
        rules: [{ required: true, message: 'Please select a date!' }],

    },
    {
        type: 'textArea',
        name: 'description',
        label: 'Description',
        placeholder: 'Enter description',
        rules: [{ required: false, message: 'Please enter a description!' }],
        rows: 4,
    },
    {
        type: 'button',
        name: 'submit',
        label: '',
        buttonType: 'primary',
        htmlType: 'submit',
        text: 'Confirm',
        className: 'flex justify-end',
    },
];

export const healthFormItems = [
    {
        type: 'select',
        name: 'disease',
        label: 'Choose Disease',
        placeholder: 'Select a disease',
        rules: [{ required: true, message: 'Please select a disease' }],
        options: [
            { value: 'newcastle', label: 'Newcastle' },
            { value: 'marek', label: 'Marek' },
            { value: 'bronchitis', label: 'Bronchitis' },
            { value: 'fowlpox', label: 'Fowlpox' },
            { value: 'parasitism', label: 'Parasitism' },
            { value: 'avianCholera', label: 'Avian Cholera' },
            { value: 'collbacillosis', label: 'Collbacillosis' },
            { value: 'toxins', label: 'Toxins' },
            { value: 'aflatoxionPoisoning', label: 'Aflatoxion poisoning' },
            { value: 'ulcerativeEnteritis', label: 'Ulcerative Enteritis' },
            { value: 'birdFlu', label: 'Bird Flu' },
            { value: 'eyeDisorders', label: 'Eye Disorders' },
            { value: 'injuredBeak', label: 'Injured Beak' }
        ],
    },
    {
        type: 'input',
        name: 'medicineName',
        label: 'Medicine Name',
        placeholder: 'Enter medicine name',
        rules: [{ required: true, message: 'Please enter the medicine name' }]
    },
    {
        type: 'inputNumber',
        name: 'birdsCount',
        label: 'Birds Count',
        placeholder: 'Enter birds count',
        rules: [{ required: true, message: 'Please enter the birds count' }],
    },
    {
        type: 'input',
        name: 'doctorName',
        label: 'Doctor Name',
        placeholder: "Enter doctor's name",
        rules: [{ required: true, message: "Please enter the doctor's name" }]
    },
    {
        type: 'datePicker',
        name: 'date',
        label: 'Date',
        placeholder: 'Select date',
        rules: [{ required: true, message: 'Please select a date' }],
    },
    {
        type: 'textArea',
        name: 'description',
        label: 'Description',
        placeholder: 'Enter description',
        rules: [{ required: false, message: 'Please enter a description' }],
        rows: 4
    },
    {
        type: 'button',
        name: 'submit',
        buttonType: 'primary',
        htmlType: 'submit',
        text: 'Confirm'
    }
];

export const incomeExpenseFormItems = (type: any) => [
    {
        type: 'select',
        name: type === 'income' ? 'purpose' : 'expenseItem',
        label: type === 'income' ? 'Purpose' : 'Expense Item',
        placeholder: type === 'income' ? 'Select a purpose' : 'Select an expense item',
        rules: [{ required: true, message: type === 'income' ? 'Please select a purpose!' : 'Please select an expense item!' }],
        options: type === 'income'
            ? [
                { value: 'eggSale', label: 'Egg Sale' },
                { value: 'birdSale', label: 'Bird Sale' },
                { value: 'meatSale', label: 'Meat Sale' }
            ]

            : [
                { value: 'bird-purchase', label: 'Bird Purchase' },
                { value: 'feed-purchase', label: 'Feed Purchase' },
                { value: 'medicine', label: 'Medicine' },
                { value: 'vaccine', label: 'Vaccine' },
                { value: 'salary-payments', label: 'Salary Payments' },
                { value: 'rent', label: 'Rent' }
            ]
    },
    {
        type: 'inputNumber',
        name: 'howMany',
        label:  type === 'income' ? 'How Many' : 'How Many/Much',
        placeholder: 'Enter quantity',
        rules: [{ required: true, message: 'Please input the quantity!' }],

    },
    {
        type: type === 'income' ? 'inputNumber' : 'input',
        name: type === 'income' ? 'saleAmount' : 'paidTo',
        label: type === 'income' ? 'Sale Amount' : 'Expense Amount',
        placeholder: type === 'income' ? 'Enter amount' : 'Enter name of the recipient',
        rules: [{ required: true, message: type === 'income' ? 'Please input the sale amount!' : 'Please enter the name of the recipient!' }],
    },
    {
        type: 'select',
        name: 'paymentMethod',
        label: 'Payment Method',
        placeholder: 'Select a payment method',
        rules: [{ required: true, message: 'Please select a payment method!' }],
        options: [
            { value: 'cash', label: 'Cash' },
            { value: 'bankTransfer', label: 'Bank Transfer' },
            { value: 'cheque', label: 'Cheque' }
        ]

    },
    {
        type: 'select',
        name: 'paymentStatus',
        label: 'Payment Status',
        placeholder: 'Select payment status',
        rules: [{ required: true, message: 'Please select a payment status!' }],
        options: [
            { value: 'cleared', label: 'Cleared' },
            { value: 'unclear', label: 'Unclear' },
            { value: 'reconciled', label: 'Reconciled' }
        ]
    },
    {
        type: 'input',
        name: type === 'income' ? 'soldTo' : 'paidTo',
        label: type === 'income' ? 'Sold To' : 'Paid To',
        placeholder: type === 'income' ? 'Enter name of buyer': 'Enter person name',
        rules: [{ required: true, message: type === 'income' ? 'Please input the buyer name!' : 'Please input person name!' }]
    },
    {
        type: 'datePicker',
        name: 'date',
        label: 'Date',
        rules: [{ required: true, message: 'Please select a date!' }],

    },
    {
        type: 'textArea',
        name: 'howManyMuch',
        label: 'How Many/Much',
        placeholder: 'Enter details',
        rules: [{ required: false, message: 'Please input details!' }],
        rows: 4
    },
    {
        type: 'button',
        name: 'submit',
        buttonType: 'primary',
        htmlType: 'submit',
        text: 'Confirm',
        className: 'flex justify-end'
    }
];

