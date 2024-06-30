/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretandard: ['Pretendard', 'sans-serif']
      },
      fontSize: {
        'heading-1': [
          '96px',
          {
            lineHeight: '140%',
            letterSpacing: '-1.25%',
            fontWeight: '300'
          }
        ],
        'heading-2': [
          '60px',
          {
            lineHeight: '140%',
            letterSpacing: '-0.5%',
            fontWeight: '300'
          }
        ],
        'heading-3': [
          '48px',
          {
            lineHeight: '140%',
            letterSpacing: '0%',
            fontWeight: '400'
          }
        ],
        'subtitle-1': [
          '34px',
          {
            lineHeight: '140%',
            letterSpacing: '0.25%',
            fontWeight: '300'
          }
        ],
        'subtitle-2': [
          '24px',
          {
            lineHeight: '140%',
            letterSpacing: '0%',
            fontWeight: '500'
          }
        ],
        'subtitle-3': [
          '20px',
          {
            lineHeight: '140%',
            letterSpacing: '0%',
            fontWeight: '700'
          }
        ],
        body: [
          '16px',
          {
            lineHeight: '140%',
            letterSpacing: '0%',
            fontWeight: '400'
          }
        ],
        button: [
          '14px',
          {
            lineHeight: '140%',
            letterSpacing: '1.25%',
            fontWeight: '500'
          }
        ],
        caption: [
          '12px',
          {
            lineHeight: '140%',
            letterSpacing: '0.4%',
            fontWeight: '400'
          }
        ],
        overline: [
          '12px',
          {
            lineHeight: '140%',
            letterSpacing: '1.5%',
            fontWeight: '300'
          }
        ],
        calendar: [
          '10px',
          {
            lineHeight: '140%',
            letterSpacing: '0%',
            fontWeight: '500'
          }
        ]
      },
      colors: {
        primary: {
          //주요 색상
          50: '#f0f0fd',
          75: '#c0c2f5',
          100: '#a6a9f1',
          200: '#7f83ea',
          300: '#656ae6',
          400: '#474aa1',
          500: '#3e418c'
        },
        secondary: {
          //보조 색상
          50: '#f9f0fd',
          75: '#e7c0f5',
          100: '#dda6f1',
          200: '#cf7fea',
          300: '#c565e6',
          400: '#8a47a1',
          500: '#783e8c'
        },
        success: {
          //성공 색상
          50: '#f1fbef',
          75: '#c4efbd',
          100: '#abe9a2',
          200: '#87df79',
          300: '#6fd95e',
          400: '#4e9842',
          500: '#448439'
        },
        warning: {
          50: '#fefdee',
          75: '#f9f6b7',
          100: '#f6f39a',
          200: '#f3ee6e',
          300: '#f0ea50',
          400: '#a8a438',
          500: '#928f31'
        },
        danger: {
          50: '#fcefef',
          75: '#f3bbbb',
          100: '#ee9f9f',
          200: '#e67676',
          300: '#e15a5a',
          400: '#9e3f3f',
          500: '#893737'
        },
        neutrals: {
          //배경과 텍스트 색상
          0: '#ffffff',
          10: '#fbfbfc',
          20: '#f6f6f8',
          30: '#ededf1',
          40: '#e2e3e8',
          50: '#c8c8d4',
          60: '#babbc9',
          70: '#afb0c0',
          80: '#a2a3b6',
          90: '#9596ab',
          100: '#8889a1',
          200: '#7a7c97',
          300: '#6d6e8c',
          400: '#626483',
          500: '#555679',
          600: '#4a4b70',
          700: '#3a3c64',
          800: '#2d2f5a',
          900: '#222451'
        }
      }
    }
  },
  plugins: []
}
