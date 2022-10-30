

const famousQuotes = [
  {
      "quote": "If you don’t know history, then you don’t know anything. You are a leaf that doesn’t know it is part of a tree.",
      "name": "MICHAEL CRICHTON"
  },
  {
      "quote": "Alternate history fascinates me, as it fascinates all novelists, because ‘What if?’ is the big thing.",
      "name": "KATE ATKINSON"
  },
  {
      "quote": "The history of the past interests us only in so far as it illuminates the history of the present.",
      "name": "ERNEST DIMNET"
  },
  {
      "quote": "History has demonstrated that the most notable winners usually encountered heartbreaking obstacles before they triumphed. They won because they refused to become discouraged by their defeats.",
      "name": "B. C. FORBES"
  },
  {
      "quote": "If history and science have taught us anything, it is that passion and desire are not the same as truth.",
      "name": "E. O. WILSON"
  },
  {
      "quote": "A generation which ignores history has no past — and no future.  ",
      "name": "ROBERT A HEINLEIN"
  },
  {
      "quote": "Our history is not our destiny.",
      "name": "ALAN COHEN"
  },
  {
      "quote": "The only history is a mere question of one’s struggle inside oneself. But that is the joy of it. One need neither discover Americas nor conquer nations, and yet one has as great a work as Columbus or Alexander, to do.",
      "name": "D. H. LAWRENCE"
  },
  {
      "quote": "Life moves fast. As much as you can, learn from your history, you have to move forward.",
      "name": "EDDIE VEDDER"
  },
  {
      "quote": "History is merely a list of surprises. It can only prepare us to be surprised yet again.",
      "name": "KURT VONNEGUT"
  },
  {
      "quote": "The past changes a little every time we retell it.",
      "name": "HILARY MANTEL"
  },
  {
      "quote": "History repeats itself, first as tragedy, second as farce.",
      "name": "KARL MARX"
  },
  {
      "quote": "History reports that the men who can manage men manage the men who can manage only things, and the men who can manage money manage all.",
      "name": "WILL DURANT"
  },
  {
      "quote": "I’ve been completely fascinated with history because it tells everything about what’s going to happen next because it’s cyclical, everything repeats in general.",
      "name": "EMILIE AUTUMN"
  },
  {
      "quote": "The game of history is usually played by the best and the worst over the heads of the majority in the middle.",
      "name": "ERIC HOFFER"
  },
  {
      "quote": "People are trapped in history and history is trapped in them.",
      "name": "JAMES BALDWIN"
  },
  {
      "quote": "It had long come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
      "name": "LEONARDO DA VINCI"
  },
  {
      "quote": "Anybody can make history. Only a great man can write it.",
      "name": "OSCAR WILDE"
  },
  {
      "quote": "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
      "name": "MAHATMA GANDHI"
  },
  {
      "quote": "Men make history and not the other way around. In periods where there is no leadership, society stands still. Progress occurs when courageous, skillful leaders seize the opportunity to change things for the better.",
      "name": "HARRY S. TRUMAN"
  },
  {
      "quote": "History does nothing; it does not possess immense riches, it does not fight battles. It is men, real, living, who do all this.",
      "name": "KARL MARX"
  },
  {
      "quote": "We don’t want tradition. We want to live in the present and the only history that is worth a tinker’s damn is the history we make today.",
      "name": "HENRY FORD"
  },
  {
      "quote": "Today is either the beginning of the end, or the end of the beginning. Today we are making history.",
      "name": "ECKHARD PFEIFFER"
  },
  {
      "quote": "The history of the world is the biography of the great man. And I said: The great man always acts like a thunder. He storms the skies, while others are waiting to be stormed.",
      "name": "THOMAS CARLYLE"
  },
  {
      "quote": "The people who have really made history are the martyrs.",
      "name": "ALEISTER CROWLEY"
  },
  {
      "quote": "The historic ascent of humanity, taken as a whole, may be summarized as a succession of victories of consciousness over blind forces – in nature, in society, in man himself.",
      "name": "LEON TROTSKY"
  },
  {
      "quote": "We are not makers of history. We are made by history.",
      "name": "MARTIN LUTHER KING JR"
  },
  {
      "quote": "Few will have the greatness to bend history itself; but each of us can work to change a small portion of events, and in the total of all those acts will be written the history of this generation.",
      "name": "ROBERT F. KENNEDY"
  },
  {
      "quote": "The main thing is to make history, not to write it.",
      "name": "OTTO VON BISMARCK"
  },
  {
      "quote": "History is written by the victors.",
      "name": "WINSTON CHURCHILL"
  },
  {
      "quote": "Blood alone moves the wheels of history.",
      "name": "MARTIN LUTHER"
  },
  {
      "quote": "Revolutions are the locomotives of history.",
      "name": "KARL MARX"
  },
  {
      "quote": "Human history in essence is the history of ideas.",
      "name": "H. G. WELLS"
  },
  {
      "quote": "History, despite its wrenching pain, cannot be unlived, however, if faced with courage, need not be lived again.",
      "name": "MAYA ANGELOU"
  },
  {
      "quote": "The most effective way to destroy people is to deny and obliterate their own understanding of their history.",
      "name": "GEORGE ORWELL (MORE GEORGE ORWELL QUOTES)"
  },
  {
      "quote": "History is a set of lies agreed upon.",
      "name": "NAPOLEON BONAPARTE (MORE NAPOLEON BONAPARTE QUOTES)"
  },
  {
      "quote": "Neither the life of an individual nor the history of a society can be understood without understanding both.",
      "name": "C. WRIGHT MILLS"
  },
  {
      "quote": "It is remarkable how closely the history of the apple tree is connected with that of man.",
      "name": "HENRY DAVID THOREAU"
  },
  {
      "quote": "I like the dreams of the future better than the history of the past.",
      "name": "THOMAS JEFFERSON"
  },
  {
      "quote": "Things have never been more like the way they are today in history.",
      "name": "DWIGHT D. EISENHOWER"
  },
  {
      "quote": "Human history is not the product of the wise direction of human reason, but is shaped by the forces of emotion — our dreams, our pride, our greed, our fears, and our desire for revenge.",
      "name": "LIN YUTANG"
  },
  {
      "quote": "History is not a burden on the memory but an illumination of the soul.",
      "name": "LORD ACTON"
  },
  {
      "quote": "Whether in commerce, science, or politics — history remembers the artists.",
      "name": "NAVAL RAVIKANT"
  },
  {
      "quote": "We’ll be remembered more for what we destroy than what we create.",
      "name": "CHUCK PALAHNIUK"
  },
  {
      "quote": "The history of mankind is the instant between two strides taken by a traveler.",
      "name": "FRANZ KAFKA"
  },
  {
      "quote": "On the day when man told the story of his life to man, history was born.",
      "name": "ALFRED DE VIGNY"
  },
  {
      "quote": "The best prophet of the future is the past.",
      "name": "LORD BYRON"
  },
  {
      "quote": "The whole history of the world is summed up in the fact that, when nations are strong, they are not always just, and when they wish to be just, they are no longer strong.",
      "name": "WINSTON CHURCHILL"
  },
  {
      "quote": "History is a pack of lies we play on the dead.",
      "name": "VOLTAIRE"
  },
  {
      "quote": "The writer may very well serve a movement of history as its mouthpiece, but he cannot of course create it.",
      "name": "KARL MARX"
  },
  {
      "quote": "History is a people’s memory, and without a memory, man is demoted to the lower animals.",
      "name": "MALCOLM X (MORE MALCOLM X QUOTES)"
  },
  {
      "quote": "Fellow citizens, we cannot escape history.",
      "name": "ABRAHAM LINCOLN"
  },
  {
      "quote": "Poetry is finer and more philosophical than history; for poetry expresses the universal, and history only the particular.",
      "name": "ARISTOTLE"
  },
  {
      "quote": "We learn from history that we don’t learn from history!",
      "name": "DESMOND TUTU"
  },
  {
      "quote": "History is merely gossip.",
      "name": "OSCAR WILDE"
  },
  {
      "quote": "History laughs at both the victim and the aggressor.",
      "name": "MAHMOUD DARWISH"
  },
  {
      "quote": "We are all tourists in history, and irony is what we win in wars.",
      "name": "ANATOLE BROYARD"
  },
  {
      "quote": "And if all others accepted the lie which the Party imposed — if all records told the same tale — then the lie passed into history and became truth.",
      "name": "GEORGE ORWELL – 1984 (MORE 1984 QUOTES)"
  },
  {
      "quote": "History will have to record that the greatest tragedy of this period of social transition was not the strident clamor of the bad people, but the appalling silence of the good people.",
      "name": "MARTIN LUTHER KING JR."
  },
  {
      "quote": "Black history is American history.",
      "name": "MORGAN FREEMAN"
  },
  {
      "quote": "The history of all previous societies has been the history of class struggles.",
      "name": "KARL MARX"
  },
  {
      "quote": "You cannot amputate your history from your destiny, because that is redemption.",
      "name": "BETH MOORE"
  },
  {
      "quote": "Remember, remember always, that all of us, and you and I especially, are descended from immigrants and revolutionists.",
      "name": "FRANKLIN D. ROOSEVELT"
  },
  {
      "quote": "History books that contain no lies are extremely dull.",
      "name": "ANATOLE FRANCE"
  },
  {
      "quote": "Long before history began we men have got together apart from the women and done things. We had time.",
      "name": "C. S. LEWIS"
  },
  {
      "quote": "On human stupidity: It is one of the most powerful forces that shape history.",
      "name": "YUVAL NOAH HARARI"
  },
  {
      "quote": "Human blunders usually do more to shape history than human wickedness.",
      "name": "A. J. P. TAYLOR"
  },
  {
      "quote": "When the great history of trouble is written, my family will stand extremely high in the table of contents.",
      "name": "ALLAN SHERMAN"
  },
  {
      "quote": "History is an account, mostly false, of events, mostly unimportant, which are brought about by rulers, mostly knaves, and soldiers, mostly fools.",
      "name": "AMBROSE BIERCE"
  },
  {
      "quote": "Anyone who believes you can’t change history has never tried to write his memoirs.",
      "name": "DAVID BEN GURION"
  },
  {
      "quote": "A poet in history is divine, but a poet in the next room is a joke.",
      "name": "MAX EASTMAN"
  },
  {
      "quote": "Historian: an unsuccessful novelist.",
      "name": "H. L. MENCKEN"
  },
  {
      "quote": "I felt like a pickle stepping into history.",
      "name": "BILL CLINTON"
  },
  {
      "quote": "People take the longest possible paths, digress to numerous dead ends, and make all kinds of mistakes. Then historians come along and write summaries of this messy, nonlinear process and make it appear like a simple, straight line.",
      "name": "DEAN KAMEN"
  },
  {
      "quote": "Yeah, I read history. But it doesn’t make you nice. Hitler read history, too.",
      "name": "JOAN RIVERS"
  },
  {
      "quote": "History can bring luck: this is what we can call optimism.",
      "name": "STEPHANE HESSEL"
  },
  {
      "quote": "History never looks like history when you are living through it.",
      "name": "JOHN W. GARDNER"
  },
  {
      "quote": "Hindsight is the historian’s necessary vice.",
      "name": "HILARY MANTEL"
  },
  {
      "quote": "History is the present. That’s why every generation writes it anew. But what most people think of as history is its end product, myth.",
      "name": "E. L. DOCTOROW"
  },
  {
      "quote": "Psychology keeps trying to vindicate human nature. History keeps undermining the effort.",
      "name": "MASON COOLEY"
  },
  {
      "quote": "Like a historian, I interpret, select, discard, shape, simplify. Unlike a historian, I make up people’s thoughts.",
      "name": "HILARY MANTEL"
  },
  {
      "quote": "Every historian discloses a new horizon.",
      "name": "GEORGE SAND"
  },
  {
      "quote": "History is a race between education and catastrophe.",
      "name": "H. G. WELLS"
  },
  {
      "quote": "The historian is a prophet looking backward.",
      "name": "KARL WILHELM FRIEDRICH SCHLEGEL"
  },
  {
      "quote": "To understand a science, it is necessary to know its history.",
      "name": "AUGUSTE COMTE"
  },
  {
      "quote": "To a historian libraries are food, shelter, and even muse.",
      "name": "BARBARA TUCHMAN"
  },
  {
      "quote": "If history were taught in the form of stories, it would never be forgotten.",
      "name": "RUDYARD KIPLING"
  },
  {
      "quote": "History is information. Memory is part of your identity.",
      "name": "DAVID MILIBAND"
  },
  {
      "quote": "People who make history know nothing about history. You can see that in the sort of history they make.",
      "name": "GILBERT K. CHESTERTON"
  },
  {
      "quote": "There are so many times and places in history in our world that I just don’t know anything about, and when I learn about them they’re always fascinating.",
      "name": "ANDREW STANTON"
  },
  {
      "quote": "The public history of modern art is the story of conventional people not knowing what they are dealing with.",
      "name": "GOLDA MEIR"
  },
  {
      "quote": "History teaches that wars begin when governments believe the price of aggression is cheap.",
      "name": "RONALD REAGAN"
  },
  {
      "quote": "History is nothing but assisted and recorded memory.",
      "name": "GEORGE SANTAYANA"
  },
  {
      "quote": "The historian will tell you what happened. The novelist will tell you what it felt like.",
      "name": "E. L. DOCTOROW"
  },
  {
      "quote": "To study history means submitting to chaos and nevertheless retaining faith in order and meaning.",
      "name": "HERMANN HESSE"
  },
  {
      "quote": "What is history? An echo of the past in the future; a reflex from the future on the past.",
      "name": "VICTOR HUGO"
  },
  {
      "quote": "If you want the present to be different from the past, study the past.",
      "name": "BARUCH SPINOZA"
  },
  {
      "quote": "History is a gallery of pictures in which there are few originals and many copies.",
      "name": "ALEXIS DE TOCQUEVILLE"
  },
  {
      "quote": "Work hard, have fun and make history.",
      "name": "JEFF BEZOS"
  },
  {
      "quote": "Without words, without writing and without books there would be no history, there could be no concept of humanity.",
      "name": "HERMANN HESSE"
  },
  {
      "quote": "There is nothing new in the world except the history you do not know.",
      "name": "HARRY S. TRUMAN"
  },
  {
      "quote": "You don’t hate history, you hate the way it was taught to you in high school.",
      "name": "STEPHEN AMBROSE"
  },
  {
      "quote": "Study history, study history. In history lies all the secrets of statecraft.",
      "name": "WINSTON CHURCHILL"
  },
  {
      "quote": "Who has fully realized that history is not contained in thick books but lives in our very blood?",
      "name": "CARL JUNG"
  },
  {
      "quote": "Study men, not historians.",
      "name": "HARRY S. TRUMAN"
  },
  {
      "quote": "Reading a book is like re-writing it for yourself. You bring to a novel, anything you read, all your experience of the world. You bring your history and you read it in your own terms.",
      "name": "ANGELA CARTER"
  },
  {
      "quote": "I can’t change history, I don’t want to change history. I can only change the future. I’m working on that.",
      "name": "BORIS BECKER"
  },
  {
      "quote": "A library is the delivery room for the birth of ideas, a place where history comes to life.",
      "name": "NORMAN COUSINS"
  },
  {
      "quote": "Unlike any other time in our history, we have to know that staying in school and getting an education is the most important thing you can do.",
      "name": "ALEXIS HERMAN"
  },
  {
      "quote": "A myth is far truer than a history, for a history only gives a story of the shadows, whereas a myth gives a story of the substances that cast the shadows.",
      "name": "ANNIE BESANT"
  },
  {
      "quote": "If you don’t know history, it is as if you were born yesterday.",
      "name": "HOWARD ZINN"
  },
  {
      "quote": "A little library, growing every year, is an honorable part of a man’s history. It is a man’s duty to have books.",
      "name": "HENRY WARD BEECHER"
  },
  {
      "quote": "The so-called lessons of history are for the most part the rationalizations of the victors. History is written by the survivors.",
      "name": "MAX LERNER"
  },
  {
      "quote": "We must admit that history is enjoyable to a large extent because it enables us to pass judgement on the past.",
      "name": "DOUGLAS HURD"
  },
  {
      "quote": "Ideas shape the course of history.",
      "name": "JOHN MAYNARD KEYNES"
  },
  {
      "quote": "Many of the greatest crimes in history were caused not by hatred, but rather by indifference. They were caused by people who could have done something, but did not even bother lifting a finger.",
      "name": "YUVAL NOAH HARARI"
  },
  {
      "quote": "Whatever we do or fail to do will influence the course of history.",
      "name": "ARTHUR HENDERSON"
  },
  {
      "quote": "Live out of your imagination, not your history.",
      "name": "STEPHEN COVEY"
  },
  {
      "quote": "I believe that we must maintain pride in the knowledge that the actions we take, based on our own decisions and choices as individuals, link directly to the magnificent challenge of transforming human history.",
      "name": "DAISAKU IKEDA"
  },
  {
      "quote": "There are still many causes worth sacrificing for, so much history yet to be made.",
      "name": "MICHELLE OBAMA"
  },
  {
      "quote": "Never doubt that you can change history. You already have.",
      "name": "MARGE PIERCY"
  },
  {
      "quote": "Love is the emblem of eternity; it confounds all notion of time; effaces all memory of a beginning, all fear of an end.",
      "name": "ANNE LOUISE GERMAINE DE STAËL"
  },
  {
      "quote": "Each time you happen to me all over again.",
      "name": "EDITH WHARTON"
  },
  {
      "quote": "Once I had a love and it was divine.",
      "name": "BLONDIE"
  },
  {
      "quote": "Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.",
      "name": "NICOLE KRAUSS"
  },
  {
      "quote": "Only one life, that soon is past. Only what’s done with love will last.",
      "name": "UNKNOWN"
  },
  {
      "quote": "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
      "name": "SARAH DESSEN"
  },
  {
      "quote": "Come out of the circle of time. And into the circle of love.",
      "name": "RUMI"
  },
  {
      "quote": "And it’s like some tiny nothing that sets off a natural disaster halfway across the world, only this was the opposite of disaster, how by accident she saved me with that thoughtless act of grace, and she never knew, and how that, too, is the part of the history of love.",
      "name": "NICOLE KRAUSS"
  }
]

module.exports = famousQuotes;