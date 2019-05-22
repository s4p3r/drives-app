import React,{useState, useEffect} from 'react'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

export default function LoginForm({subClick}) {
  const name = useInputValue('');
  const password = useInputValue('');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!name.value || !password.value) {
      setLoading(true)
    }else{
      setLoading(false)
    }
  }, [name, password])
  

  return (
    <form>
      <h1 className="text-center">登录</h1>
      <div className="form-group">
        <label className="control-label">用户名:</label>
        <input type="text" name="" id="" className="form-control" {...name} placeholder="" aria-describedby="helpId" />
        </div>
        <div className="form-group">
        <label className="control-label">密码:</label>
        <input type="password" name="" id="" className="form-control" placeholder="" {...password} aria-describedby="helpId" />
        </div>
        <div className="from-group">
        <button className="btn btn-primary btn-lg" onClick={(e) =>{ e.preventDefault(); subClick(name.value, password.value)}}
        disabled = {loading} 
        >登录</button>
        </div>
        </form>
      )
    }
