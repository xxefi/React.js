export default function Form({
  onSubmit,
  handleChange,
  handleCountryChange,
  handleSubmit,
  register,
  errors,
  style,
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
      <input
        type="text"
        onChange={handleCountryChange}
        placeholder="Введите страну..."
        className={errors.country ? style.inputError : ""}
        {...register("country", { required: true })}
      />
      {errors.country && (
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
