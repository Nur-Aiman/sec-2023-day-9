document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display')
    const buttons = document.querySelectorAll('.button')
    const operators = document.querySelectorAll('.operator')
    const equalBtn = document.querySelector('.equal')

    let currentInput = ''
    let currentOperator = ''
    let firstValue = ''

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent === 'cancel') {
                currentInput = ''
                firstValue = ''
                currentOperator = ''
                display.textContent = '0'
            } else {
                currentInput += button.textContent
                display.textContent = currentInput
            }
        })
    })

    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (currentInput !== '') {
                if (firstValue === '') {
                    firstValue = parseFloat(currentInput)
                    currentInput = ''
                }
                currentOperator = operator.textContent
            }
        })
    })

    equalBtn.addEventListener('click', () => {
        if (currentInput !== '' && firstValue !== '' && currentOperator !== '') {
            const secondValue = parseFloat(currentInput)
            let result

            switch (currentOperator) {
                case '+':
                    result = firstValue + secondValue
                    break
                case '-':
                    result = firstValue - secondValue
                    break
                case '*':
                    result = firstValue * secondValue
                    break
                case '/':
                    result = firstValue / secondValue
                    break
                default:
                    break
            }

            display.textContent = result.toFixed(2)
            firstValue = ''
            currentInput = ''
            currentOperator = ''
        }
    })
})