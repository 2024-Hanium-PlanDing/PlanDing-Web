import SelectBox from '../SelectBox'

const InviteGroupModal = ({
  modalState,
  inputRef,
  inviteHandle,
  closeModalHandle
}) => {
  if (!modalState) {
    return null
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
      <div className="w-[448px] h-[259px] bg-neutrals-0 rounded-lg p-2">
        <div className="w-full h-full border border-primary-75 rounded-lg p-5 flex flex-col gap-5">
          <div className="w-[392px] h-[81px] border-b border-b-neutrals-60">
            <p className="text-subtitle-2 text-primary-500">
              그룹으로 초대하기
            </p>
            <p className="mt-2.5 text-caption text-neutrals-400">
              그룹으로 동료를 초대해주세요.
            </p>
          </div>
          <div>
            <input
              ref={inputRef}
              placeholder="이름#0000"
              className="w-[392px] h-[40px] p-2.5 rounded border border-neutrals-80"
              type="text"
            />
          </div>
          <SelectBox
            text="요청 보내기"
            handleSubmit={inviteHandle}
            closeModalHandle={closeModalHandle}
          />
        </div>
      </div>
    </div>
  )
}
export default InviteGroupModal
