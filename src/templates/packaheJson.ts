const packageJson = {
  "dependencies": {
    "@types/enzyme": "^2.7.2",
    "@types/jest": "^18.1.1",
    "@types/node": "^7.0.5",
    "@types/react": "^15.6.6",
    "@types/react-dom": "^0.14.22",
    "@types/react-redux": "^4.4.36",
    "enzyme": "^2.7.1",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-redux": "^5.0.2",
    "redux": "^3.6.0"
  },
  "scripts": {
    "start": "react-scripts-ts start",
    "build": "react-scripts-ts build",
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject"
  }
}


export function packageJsonName(name: string) {
  return {
    name,
    ...packageJson
  }
}

