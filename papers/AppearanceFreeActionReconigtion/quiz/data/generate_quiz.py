import os 
from os.path import join

# convert all .avi files to mp4
# for i in *.avi; do ffmpeg -i "$i" "${i%.*}.mp4"; done

mapping = {"a": "JumpingJack", "b": "Lunges", "c": "PullUps", "d": "PushUps", "e": "Swing"}
rev_mapping = {v:k for k,v in mapping.items()}

if __name__ == "__main__":
    toprint = 'myQuestions = ['

    for file in os.listdir('papers/AppearanceFreeActionReconigtion/quiz/data'):
        if file.endswith("mp4"):
            class_name = file.split("_")[1]
            answ = rev_mapping[class_name]

            toprint += '{ \n'
            toprint += f'video: "../papers/AppearanceFreeActionReconigtion/quiz/data/{file}", \n'
            toprint += 'answers: { \n\
                        a: "JumpingJack", \n\
                        b: "Lunges", \n\
                        c: "PullUps",\n\
                        d: "PushUps",\n\
                        e: "Swing" \n\
                        }, \n'
            toprint += f'correctAnswer: "{answ}" \n'
            toprint += '}, \n'
    toprint += '\n \n ]'

    print(toprint)



# cp /home/f/projects/MotionPaper/data/ucf101/JumpingJack/v_JumpingJack_g18_c02.avi . &&
# cp /home/f/projects/MotionPaper/data/ucf101/Lunges/v_Lunges_g24_c01.avi . &&
# cp /home/f/projects/MotionPaper/data/ucf101/PullUps/v_PullUps_g19_c01.avi . &&
# cp /home/f/projects/MotionPaper/data/ucf101/PushUps/v_PushUps_g05_c04.avi . &&
# cp /home/f/projects/MotionPaper/data/ucf101/Swing/v_Swing_g08_c03.avi .
