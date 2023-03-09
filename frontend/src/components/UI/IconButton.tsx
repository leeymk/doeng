import React, { FC, PropsWithChildren, MouseEvent, ReactNode } from 'react'

interface Props {
  icon: ReactNode // 아이콘: <svg/> react-icons 라이브러리 사용을 추천
  label?: string // 라벨: 아이콘과 함께 띄울 문구
  onClick?: (e: MouseEvent<HTMLElement>) => void // 클릭 시 동작 함수
  size?: 'small' | 'medium' | 'large' // 크기: sizing 옵션
  colorClass?: string // 색깔: tailwind 클래스
  disabled?: boolean // 아이콘 클릭 가능 여부
  labelPosition?: 'up' | 'down' | 'left' | 'right' // 아이콘을 기준으로 한 라벨의 위치
}

const IconButton: FC<PropsWithChildren<Props>> = function ({
  icon,
  label = '',
  onClick = () => {},
  size = 'medium',
  colorClass = 'text-yellow-100',
  disabled = false,
  labelPosition = 'down',
}) {
  // 라벨 위치를 조정하는 tailwind 클래스 할당
  let positionClass = ''
  switch (labelPosition) {
    case 'down':
      positionClass = 'flex-col'
      break
    case 'right':
      positionClass = 'flex-row'
      break
    case 'left':
      positionClass = 'flex-row-reverse'
      break
    case 'up':
      positionClass = 'flex-col-reverse'
      break
  }

  // 아이콘과 라벨 크기를 조절하는 tailwind 클래스 할당
  let iconSizeClass = ''
  let labelSizeClass = ''
  switch (size) {
    case 'small':
      iconSizeClass = 'text-xl'
      labelSizeClass = 'text-base'
      break
    case 'medium':
      iconSizeClass = 'text-4xl'
      labelSizeClass = 'text-lg'
      break
    case 'large':
      iconSizeClass = 'text-6xl'
      labelSizeClass = 'text-xl'
      break
  }

  // disabled 옵션에 따라 버튼 동작여부 결정
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return
    onClick(e)
  }

  return (
    <div
      className={`flex ${positionClass} ${colorClass} justify-center items-center cursor-pointer`}
      onClick={handleClick}
    >
      <div className={`${iconSizeClass}`}>{icon}</div>
      {label ? <div className={`${labelSizeClass}`}>{label}</div> : null}
    </div>
  )
}

export default IconButton
