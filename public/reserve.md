body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  * {
    box-sizing: border-box;
  }
  
  .App {
    width: 100%;
    display: grid;
    place-items: center;
    background-color: #c9c2c2;
  
    header {
      display: grid;
      place-items: center;
      // position: fixed;
      left: 0;
      right: 0;
      top: 0;
      font-size: 25px;
      height: 15vh;
      margin-bottom: 20px;
      border-bottom: 3px solid #ccc;
      color: rgb(99, 99, 99);
    }
    .links {
      // width: 100%;
      height: 8vh;
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      align-items: center;
      a {
        text-decoration: none;
        color: grey;
      }
  
      a.active {
        color: rgb(218, 59, 59);
      }
    }
    .container {
      width: 90%;
      height: 73vh;
      display: column;
      margin-top: 20vh;
      font-size: calc(10px + 2vmin);
      color: rgb(104, 99, 99);
  
      .search {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
  
        input {
          width: 100%;
          text-align: center;
          font-size: 20px;
          height: 3rem;
          border: 2px solid #ccc;
          margin-bottom: 20px;
          background-color: #e6e0e0;
        }
        button {
          width: 100%;
          height: 3rem;
          font-size: 20px;
          color: grey;
          border: 2px solid #ccc;
          background-color: #e6e0e0;
          margin-left: 10px;
        }
      }
  
      .add {
        height: 3rem;
        display: flex;
        border-radius: 4px;
        font-size: 18px;
        text-align: center;
        background-color: #e6e0e0;
        input {
          width: 100%;
          text-align: center;
          font-size: 20px;
          height: 3rem;
          border: 2px solid #ccc;
          margin-bottom: 20px;
          background-color: #e6e0e0;
        }
        button {
          width: 3rem;
          height: 3rem;
          font-size: 20px;
          color: grey;
          border: 2px solid #ccc;
          background-color: #e6e0e0;
        }
      }
      .users {
        width: 100%;
        display: column;
        justify-content: center;
  
        .user {
          // position: relative;
          place-items: center;
          height: 3rem;
          margin: 2px;
          border-radius: 4px;
          font-size: 16px;
          color: rgb(77, 79, 80);
          border: 2px solid #ccc;
          display: flex;
          justify-content: space-between;
          .item {
            width: 18.5%;
            // border-right: 2px solid #ccc;
            padding-left: 10px;
          }
          .icons {
            // position: absolute;
            // transform: translateY(-50%);
            top: 50%;
            right: 0;
            font-size: 1.4rem;
            display: flex;
            .icon {
              padding-right: 1px;
              color: rgb(153, 152, 152);
              cursor: pointer;
              :hover {
                color: rgb(102, 100, 100);
                outline: none;
              }
            }
          }
        } // end of .user
        .edit {
          display: flex;
          input {
            color: grey;
            width: 68%;
            height: 2.5rem;
            border-radius: 4px;
            font-size: 20px;
            text-align: center;
            padding-left: 5px;
            border: 2px solid #ccc;
            background-color: #e6e0e0;
          }
          .update {
            width: 15%;
            height: 2.5rem;
            border-radius: 4px;
            font-size: 20px;
            padding: 0;
            color: grey;
            background-color: #e6e0e0;
            border: 2px solid #ccc;
          }
          .cancel {
            width: 15%;
            height: 2.5rem;
            border-radius: 4px;
            font-size: 20px;
            padding: 0;
            color: grey;
            background-color: #e6e0e0;
            border: 2px solid #ccc;
          }
        }
      } // end of .users
    }
    footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: grid;
      place-items: center;
      border-top: 3px solid #ccc;
      height: 10vh;
      // background-color: #e6e0e0;
      background-color: #c9c2c2;
  
      color: rgb(99, 99, 99);
      h2 {
        margin: 0;
      }
    }
  }
  