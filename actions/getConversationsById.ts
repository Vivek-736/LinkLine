import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationsById = async (conversationId: string) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser?.email) {
            return null;
        }
        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId,
            },
            include: {
                users: true,
            },
        });
        return conversation;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export default getConversationsById;
