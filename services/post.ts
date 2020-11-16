import path from "path";
import fs from "fs";

/**
 * Post에 필요한 기능들을 정의해 놓은 Class
 */
class Post {
  private readonly _defaultFp: string[];

  constructor() {
    this._defaultFp = [process.cwd(), "posts"];
  }
  
  /**
   *
   * @param fp: 기본경로를 제외한 경로를 배열로 받는 파라미터
   *
   * 해당 경로 밑의 모든 MyMarkdown 파일의 경로를
   * 확장자 제거 후, 배열에 담아 반환
   *
   * 배열 하나 당 파일 하나의 경로
   */
  getAllFp(fp: string[] = []): Array<string[]> {
    const fpList: Array<string[]> = [];
    const currentFp = path.join(...this._defaultFp, ...fp);
    const fileContent = fs.readdirSync(currentFp);

    fileContent.forEach((f) => {
      if (fs.statSync(path.join(currentFp, f)).isDirectory()) {
        fpList.push([...fp, f]);
        fpList.push(...this.getAllFp([...fp, f]));
      } else {
        fpList.push([...fp, f.split(".")[0]]);
      }
    });
    return fpList;
  }

  /**
   *
   * @param fp: 기본 경로를 제외한 파일의 경로를 배열로 받는 파라미터
   *
   * 배열로 파일의 경로를 받아 확장자가 없다면 .md를 붙이고,
   * 해당 파일을 읽어 내용을 반환
   */
  getOneMdFile(fp: string[]): string {
    const copyFp = [...fp];
    const ext = ".md";
    const isExt = copyFp[copyFp.length - 1].split(".")[1];
    if (!isExt) {
      copyFp[copyFp.length - 1] += ext;
    }
    return fs.readFileSync(path.join(...this._defaultFp, ...copyFp), "utf8");
  }

  /**
   *
   * @param fp: 기본 경로를 제외한 경로를 배열로 받는 파라미터
   *
   * 해당 폴더의 정보를 2차원 배열에 담아 반환하는 메소드
   * MyMarkdown 파일일 경우 파일명 대신 대제목으로 변환하여 반환
   */
  getOneDirFile(fp: string[] = []): Array<string[]> {
    const fileList: Array<string[]> = [];
    const dirFileList = fs.readdirSync(path.join(...this._defaultFp, ...fp));

    dirFileList.forEach((f) => {
      const isExt = f.split(".")[1];
      if (isExt) {
        let headTitle = this.getHeadTitle([...fp, f]);
        if (headTitle) {
          fileList.push([f, headTitle]);
        }
      } else {
        fileList.push([f, f]);
      }
    });

    return fileList;
  }

  /**
   *
   * @param fp: 기본 경로를 제외한 경로를 배열로 받는 파라미터
   *
   * 해당 파일의 제목들만 가져와 배열로 반환
   */
  getTitleList(fp: string[]): string[] {
    const fileContent = this.getOneMdFile(fp);
    const titleReg = new RegExp(/#+\s.+/, "g");
    const titleList = fileContent.match(titleReg);
    if (!titleList) {
      return [];
    }
    return titleList.map((title) => title.replace(/#+\s/, "").trim());
  }

  /**
   *
   * @param fp: 기본 경로를 제외한 경로를 배열로 받는 파라미터
   *
   * 해당 파일의 대제목을 반환
   */
  getHeadTitle(fp: string[]): string {
    return this.getTitleList([...fp])[0];
  }
}

export default Post;
