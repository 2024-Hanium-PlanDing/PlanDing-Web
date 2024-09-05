const LogoutBtn = () => {
  const logOut = () => {
    localStorage.removeItem('token')
    alert('로그아웃')
    window.location.reload()
  }
  return (
    <button
      className="w-[89px] h-[34px] rounded bg-primary-300 text-white text-button"
      onClick={() => logOut()}>
      로그아웃
    </button>
  )
}

export default LogoutBtn
