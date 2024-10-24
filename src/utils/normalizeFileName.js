export const normalizeFileName = file => {
  const nameParts = file.name.split('.') // 점을 기준으로 분리
  const extension = nameParts.length > 1 ? nameParts.pop() : '' // 확장자 추출
  const name = nameParts.join('.') // 이름 부분 합치기

  // 특수문자 제거 및 최대 15자로 자르기
  const sanitizedName = name.replace(/\W+/g, '').slice(0, 15)

  return `${sanitizedName}-${Date.now()}${extension ? '.' + extension : ''}` // 확장자 포함
}
