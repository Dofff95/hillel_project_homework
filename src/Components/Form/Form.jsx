import Input from './../Input/Input';
import Button from './../Button/Button';
import CSS from './Form.module.css'

const Form = () => {
    return(
        <form className={CSS.login_form}>
        <Input/>
        <Button/>
      </form>
    )
}
export default Form