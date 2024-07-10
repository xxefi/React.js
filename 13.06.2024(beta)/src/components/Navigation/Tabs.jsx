import Button from "./Button.jsx";
import {styled} from "styled-components"

const SectionStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Tabs({onChange, active}) {
    return (
        <SectionStyle>
            <Button isActive={active === 'task1'} onClick={() => onChange('task1')}>
                Задание 1
            </Button>
            <Button isActive={active === 'task2'} onClick={() => onChange('task2')}>
                Задание 2
            </Button>
            <Button isActive={active === 'task3'} onClick={() => onChange('task3')}>
                Задание 3
            </Button>
            <Button isActive={active === 'task4'} onClick={() => onChange('task4')}>
                Задание 4
            </Button>
            <Button isActive={active === 'task5'} onClick={() => onChange('task5')}>
                Задание 5
            </Button>
            <Button isActive={active === 'task6'} onClick={() => onChange('task6')}>
                Задание 6
            </Button>
        </SectionStyle>
    )
}