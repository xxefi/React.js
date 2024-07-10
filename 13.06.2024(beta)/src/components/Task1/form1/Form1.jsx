export default function Form1({
  onSubmit,
  handleChange,
  handleSubmit,
  style,
  register,
  errors,
}) {
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Введите город..."
        className={errors.city ? style.inputError : ""}
        {...register("city", { required: true })}
      />
      {errors.city && (
        <p
          style={{
            color: "red",
            fontWeight: "bold",
          }}
        >
          Поле обязательно для заполнения
        </p>
      )}
      <button className={style.button} type="submit">
        Найти
      </button>
    </form>
  );
}
