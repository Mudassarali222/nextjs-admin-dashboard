

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
        name: 'bird_count',
        label: 'Birds Count',
        placeholder: 'Enter birds count',
        rules: [{ required: true, message: 'Please input the birds count!' }],
    },
    {
        type: 'select',
        name: 'addition_reduction_type',
        label: type === 'Addition' ? 'Acquisition' : 'Reduction Reason',
        placeholder: type === 'Addition' ? 'Select acquisition method' : 'Select reduction method',
        rules: [{ required: true, message: type === 'Addition' ? 'Please select an acquisition method!' : 'Please select a reduction method!' }],
        options: type === 'Addition'
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
        name: 'created_date',
        label: 'Date',
        rules: [{ required: true, message: 'Please select the date!' }],
        className: 'w-full',
    },
    {
        type: 'textArea',
        name: 'notes',
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
        name: 'good_eggs',
        label: 'Good Eggs',
        placeholder: 'Enter the number of good eggs',
        rules: [{ required: true, message: 'Please input the number of good eggs!' }],
    },
    {
        type: 'inputNumber',
        name: 'spoil_eggs',
        label: 'Bad Eggs',
        placeholder: 'Enter the number of bad eggs',
        rules: [{ required: true, message: 'Please input the number of bad eggs!' }],
    },
    {
        type: 'inputNumber',
        name: 'total_eggs',
        label: 'Total Eggs',
        placeholder: 'Enter the total number of eggs',
        rules: [{ required: true, message: 'Please input the total number of eggs!' }],
    },
    type !== 'Collect' && {
        type: 'select',
        name: 'reduction_reason',
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
        name: 'collection_date',
        label: 'Date',
        placeholder: 'Select date',
        rules: [{ required: true, message: 'Please select the date!' }],
    },
    {
        type: 'textArea',
        name: 'notes',
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
        name: 'feed_name',
        label: 'Choose Feed',
        placeholder: 'Select feed type',
        rules: [{ required: true, message: 'Please select a feed type!' }],
        options: [
            { value: 'Growers Mash', label: 'Growers Mash' },
            { value: 'Layers Mash', label: 'Layers Mash' },
            { value: 'Chick and Duck Mash', label: 'Chick and Duck Mash' },
            { value: 'Pellets', label: 'Pellets' },
            { value: 'Shell Grit', label: 'Shell Grit' },
            { value: 'Chicken Scratch', label: 'Chicken Scratch' },
            { value: 'Wheat', label: 'Wheat' },
            { value: 'Barley', label: 'Barley' },
            { value: 'Oats', label: 'Oats' },
            { value: 'Mix Seeds', label: 'Mix Seeds' },
            { value: 'Bajra Millat', label: 'Bajra/Millat' },
            { value: 'Corn', label: 'Corn' },
        ],
    },
    {
        type: 'inputNumber',
        name: 'quantity',
        label: 'Feed Quantity (kg)',
        placeholder: 'Enter quantity',
        rules: [{ required: true, message: 'Please enter the feed quantity!' }],

    },
    {
        type: 'datePicker',
        name: 'collection_date',
        label: 'Date',
        placeholder: 'Select date',
        rules: [{ required: true, message: 'Please select a date!' }],

    },
    {
        type: 'textArea',
        name: 'notes',
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
        name: 'disease_name',
        label: 'Choose Disease',
        placeholder: 'Select a disease',
        rules: [{ required: true, message: 'Please select a disease' }],
        options: [
            { value: 'Newcastle', label: 'Newcastle' },
            { value: 'Marek', label: 'Marek' },
            { value: 'Bronchitis', label: 'Bronchitis' },
            { value: 'Fowlpox', label: 'Fowlpox' },
            { value: 'Parasitism', label: 'Parasitism' },
            { value: 'Avian Cholera', label: 'Avian Cholera' },
            { value: 'Collbacillosis', label: 'Collbacillosis' },
            { value: 'Toxins', label: 'Toxins' },
            { value: 'Aflatoxion Poisoning', label: 'Aflatoxion poisoning' },
            { value: 'Ulcerative Enteritis', label: 'Ulcerative Enteritis' },
            { value: 'Bird Flu', label: 'Bird Flu' },
            { value: 'Eye Disorders', label: 'Eye Disorders' },
            { value: 'Injured Beak', label: 'Injured Beak' }
        ],
    },
    {
        type: 'input',
        name: 'medicine_name',
        label: 'Medicine Name',
        placeholder: 'Enter medicine name',
        rules: [{ required: true, message: 'Please enter the medicine name' }]
    },
    {
        type: 'inputNumber',
        name: 'bird_count',
        label: 'Birds Count',
        placeholder: 'Enter birds count',
        rules: [{ required: true, message: 'Please enter the birds count' }],
    },
    {
        type: 'input',
        name: 'doctor_name',
        label: 'Doctor Name',
        placeholder: "Enter doctor's name",
        rules: [{ required: true, message: "Please enter the doctor's name" }]
    },
    {
        type: 'datePicker',
        name: 'created_date',
        label: 'Date',
        placeholder: 'Select date',
        rules: [{ required: true, message: 'Please select a date' }],
    },
    {
        type: 'textArea',
        name: 'notes',
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
        text: 'Confirm',
        className: 'flex justify-end',
    }
];

export const incomeExpenseFormItems = (type: any) => [
    {
        type: 'select',
        name: 'purpose',
        label: type === 'Income' ? 'Purpose' : 'Expense Item',
        placeholder: type === 'Income' ? 'Select a purpose' : 'Select an expense item',
        rules: [{ required: true, message: type === 'Income' ? 'Please select a purpose!' : 'Please select an expense item!' }],
        options: type === 'Income'
            ? [
                { value: 'Egg Sale', label: 'Egg Sale' },
                { value: 'Bird Sale', label: 'Bird Sale' },
                { value: 'Meat Sale', label: 'Meat Sale' }
            ]

            : [
                { value: 'Bird Purchase', label: 'Bird Purchase' },
                { value: 'Feed Purchase', label: 'Feed Purchase' },
                { value: 'Medicine', label: 'Medicine' },
                { value: 'Vaccine', label: 'Vaccine' },
                { value: 'Salary Payments', label: 'Salary Payments' },
                { value: 'Rent', label: 'Rent' }
            ]
    },
    {
        type: 'inputNumber',
        name: 'quantity',
        label:  type === 'Income' ? 'How Many' : 'How Many/Much',
        placeholder: 'Enter quantity',
        rules: [{ required: true, message: 'Please input the quantity!' }],

    },
    {
        type: type === 'Income' ? 'inputNumber' : 'input',
        name: 'sale_ammount',
        label: type === 'Income' ? 'Sale Amount' : 'Expense Amount',
        placeholder: type === 'Income' ? 'Enter amount' : 'Enter name of the recipient',
        rules: [{ required: true, message: type === 'Income' ? 'Please input the sale amount!' : 'Please enter the name of the recipient!' }],
    },
    {
        type: 'select',
        name: 'payment_method',
        label: 'Payment Method',
        placeholder: 'Select a payment method',
        rules: [{ required: true, message: 'Please select a payment method!' }],
        options: [
            { value: 'Cash', label: 'Cash' },
            { value: 'Bank Transfer', label: 'Bank Transfer' },
            { value: 'Cheque', label: 'Cheque' }
        ]

    },
    {
        type: 'select',
        name: 'payment_status',
        label: 'Payment Status',
        placeholder: 'Select payment status',
        rules: [{ required: true, message: 'Please select a payment status!' }],
        options: [
            { value: 'Cleared', label: 'Cleared' },
            { value: 'Unclear', label: 'Unclear' },
            { value: 'Reconciled', label: 'Reconciled' }
        ]
    },
    {
        type: 'input',
        name: 'sold_to',
        label: type === 'Income' ? 'Sold To' : 'Paid To',
        placeholder: type === 'Income' ? 'Enter name of buyer': 'Enter person name',
        rules: [{ required: true, message: type === 'Income' ? 'Please input the buyer name!' : 'Please input person name!' }]
    },
    {
        type: 'datePicker',
        name: 'created_date',
        label: 'Date',
        rules: [{ required: true, message: 'Please select a date!' }],

    },
    {
        type: 'textArea',
        name: 'notes',
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


export const globleFilter= [
    { key: '1', value: 'Today', label: 'Today' },
    { key: '2', value: 'Yesterday', label: 'Yesterday' },
    { key: '3', value: 'This Month', label: 'This Month' },
    { key: '4', value: 'Last Month', label: 'Last Month' },
    { key: '5', value: 'Last 3 Months', label: 'Last 3 Months' },
    { key: '6', value: 'Last 6 Months', label: 'Last 6 Months' },
    { key: '7', value: 'This Year', label: 'This Year' },
    { key: '8', value: 'Last Year', label: 'Last Year' },
    { key: '9', value: 'All Time', label: 'All Time' },
  ];
  