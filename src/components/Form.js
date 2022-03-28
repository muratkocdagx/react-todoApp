import { useState , useEffect } from "react";

const initialFormValues = {
  id: 0,
  todoTitle: "",
  isCompleted: false,
};

export default function Form({ todos, addTodo }) {
  const [form, setForm] = useState(initialFormValues);
  const [id, setId] = useState(0);


    useEffect(() => {
        setForm(initialFormValues)
    }, [todos]);


  const onChangeForm = (e) => {
    setForm({ ...form, id: id, todoTitle: e.target.value, isCompleted: false });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.todoTitle === "") {
      alert("Gorev giriniz.");
    } else {
       setId(id + 1); 
       addTodo([...todos,form]);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="todoTitle"
        className="new-todo"
        placeholder="Gorev basligi giriniz."
        value={form.todoTitle}
        onChange={onChangeForm}
      />
    </form>
  );
}
