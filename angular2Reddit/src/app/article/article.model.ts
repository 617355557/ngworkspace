export class Article {
  title: string;
  votes: number;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown(){
    this.votes -= 1;
  }

  domain(): string{
    try{
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    }catch (e) {
      return null;
    }
  }
}
